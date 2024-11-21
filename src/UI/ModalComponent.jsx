import { Modal, ModalContent, Input,ModalHeader, ModalBody, Checkbox } from "@nextui-org/react";
import Button from '../UI/Button';
import { createPortal } from "react-dom";
import LoadingIndicator from "./LoadingIndicator";
import { useRef, useState } from "react";
import { useFormData } from '../hooks/useFormData.js';

export default function ModalComponent ({ mutationObj, formTitle, loadingText, submitBtnText, isOpen, onOpenChange }) {

    const isReadRef = useRef();
    const [ isDismissable, setIsDismissable ] = useState(true);
    const { title, author, description, personalRating, price, imgUrl, isRead,
        setTitle, setAuthor, setDescription, setPersonalRating, setPrice, setImgUrl, setIsRead,
        setValues
      } = useFormData();

    const { isPending, isError, mutate, message } = mutationObj;
    
    function handleSubmit (e) {
        e.preventDefault();
        setIsDismissable(false);
        const formData = new FormData(e.target)
        const newBook = Object.fromEntries(formData);
        newBook.isRead = isReadRef.current.checked;
        //save fields to context
        mutate(newBook)
    }

    function clearFields () {
      setValues({ 
        title: '',
        description: '',
        author: '',
        personalRating: 0,
        price: 0,
        imgUrl: '',
        isRead: false
      })
    }

    return createPortal(<>
        <Modal 
        isKeyboardDismissDisabled={isDismissable}
        isDismissable={isDismissable}
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
                {isPending && <LoadingIndicator text={loadingText}/>}
                {!isPending && <>
                    <ModalHeader className="flex flex-col gap-1 font-specialFont font-bold text-xl text-accent">
                      {formTitle}
                      { isError && message?.err && ( message?.msg.map(e => (
                            <p key={e.errMessage} className="text-red-600 text-sm font-specialFont">{e.errMessage}</p>
                      )) && setIsDismissable(true))}
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                          <Input size='lg' label="Title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="text-accent" variant='flat' />
                          <Input size='lg' label="Author" name='author' value={author} onChange={(e) => setAuthor(e.target.value)} className="text-accent" variant='flat' />
                          <Input size='lg' label="Description" name='description' onChange={(e) => setDescription(e.target.value)} value={description}  />
                          <Input size='lg' type='number' step="0.01" label="Personal Rating" min={0} max={10} name='personal_rating' value={personalRating} onChange={(e) => setPersonalRating(e.target.value)}  className="text-accent" variant='flat' />
                          <Input size='lg' type='number' step="0.01" label="Price" name='price' min={0} max={500} value={price} onChange={(e) => setPrice(e.target.value)} className="text-accent" variant='flat' />
                          <Input size='lg' label="Img Link" name='img_url' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} className="text-accent" variant='flat' />
                          <Checkbox ref={isReadRef} defaultSelected={isRead} onChange={(e) => setIsRead(e.target.checked)}>I have read it.</Checkbox>
                          <div className="flex gap-2 justify-end">
                              <Button type='button' color="danger" onClick={() => {
                                  clearFields();
                                  onClose();
                                }}>
                                Close
                              </Button>
                              <Button onClick={() => {}}>
                                {submitBtnText}
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