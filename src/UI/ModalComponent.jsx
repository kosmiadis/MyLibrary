import { Modal, ModalContent, Input,ModalHeader, ModalBody, Checkbox } from "@nextui-org/react";
import Button from '../UI/Button';
import { createPortal } from "react-dom";
import LoadingIndicator from "./LoadingIndicator";
import { useMutation } from "@tanstack/react-query";
import { addBook } from "../http/http";
import { queryClient } from "../http/http";
import { useRef } from "react";

export default function ModalComponent ({isOpen, onClose, onOpenChange}) {

    const isReadRef = useRef();

    const { isPending, isError, mutate, error } = useMutation({
      mutationFn: (newBook) => addBook(newBook),
      onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['books'] });
          onClose();  
      },
      });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newBook = Object.fromEntries(formData);
        newBook.isRead = isReadRef.current.checked;
        mutate(newBook)
    }

    return createPortal(<>
        <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          base: "border-accent bg-white dark:bg-[#19172c] text-primaryForeground",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent className={isPending ? 'px-4': ''}>
          {(onClose) => (
            <>
                {isPending && <LoadingIndicator text='Adding Book'/>}
                {!isPending && <>
                    <ModalHeader className="flex flex-col gap-1 font-specialFont font-bold text-xl text-accent">Add Book
                      {isError && error?.length > 0 && (
                        error.map(e => (
                            <p key={e.errMessage} className="text-red-600 text-sm font-specialFont">{e.errMessage}</p>
                        ))
                      )}
                      { isError && <p className="text-red-600 text-sm font-specialFont">{error.message}</p>}
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                          <Input size='lg' label="Title" name='title' className="text-accent" variant='flat' />
                          <Input size='lg' label="Author" name='author' className="text-accent" variant='flat' />
                          <Input size='lg' label="Description" name='description' className="text-accent" variant='flat' />
                          <Input size='lg' type='number' label="Personal Rating" name='personal_rating' className="text-accent" variant='flat' />
                          <Input size='lg' type='number' label="Price" name='price' className="text-accent" variant='flat' />
                          <Input size='lg' label="Img Link" name='img_url' className="text-accent" variant='flat' />
                          <Checkbox ref={isReadRef}>I have read it.</Checkbox>
                          <div className="flex gap-2 justify-end">
                              <Button color="foreground" variant="light" action={onClose}>
                                Close
                              </Button>
                              <Button action={() => {}}>
                                  Add
                              </Button>
                          </div>
                      </form>
                    </ModalBody>
                </>}
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>, document.getElementById('modal'));
}