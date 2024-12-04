import { Modal, ModalContent, Input,ModalHeader, ModalBody, Checkbox, Select, SelectItem } from "@nextui-org/react";
import Button from '../UI/Button';
import { createPortal } from "react-dom";
import LoadingIndicator from "./LoadingIndicator";
import { useRef } from "react";
import { useFormData } from '../hooks/useFormData.js';

export default function ModalComponent ({ mutationObj, formTitle, loadingText, submitBtnText, isOpen, onOpenChange }) {

    const isReadRef = useRef();
    const typeRef = useRef();
    const { title, author, description, price, imgUrl, isRead,
        setTitle, setAuthor, setDescription, setPrice, setImgUrl, setIsRead,
        setValues
      } = useFormData();

    const { isPending, isError, mutate, error } = mutationObj;
    
    function handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const newBook = Object.fromEntries(formData);
        newBook.isRead = isReadRef.current.checked;
        newBook.type = typeRef.current.value;
        mutate(newBook)
    }

    function clearFields () {
      setValues({ 
        title: '',
        description: '',
        author: '',
        price: 0,
        imgUrl: '',
        isRead: false
      })
    }

    return createPortal(<>
        <Modal 
          isKeyboardDismissDisabled={false}
          isDismissable={false}
          backdrop="blur" 
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          classNames={{
          body: "py-6",
          base: "border-accent bg-white dark:bg-[#19172c] text-primaryForeground",
          closeButton: 'hidden' //hide it so that user cannot close it while making requests.
          /*closeButton: "hover:bg-white/5 active:bg-white/10",*/
        }}
      >
        <ModalContent className={isPending ? 'px-4': ''}>
          {(onClose) => (
            <>
                {isPending && <LoadingIndicator text={loadingText}/>}
                {!isPending && <>
                    <ModalHeader className="flex flex-col gap-1 font-specialFont font-bold text-xl text-accent">
                      {formTitle}
                      {isError && 
                      <p key={error.message} className="text-red-600 text-sm font-specialFont">{error.message}</p>}
                      {isError && error?.length > 0 && error?.map(er => (
                        <p key={er.errMessage} className="text-red-600 text-sm font-specialFont">{er.errMessage}</p>
                      ))}
                      {/* isError && message?.err && ( message?.msg.map(e => (
                            
                      )) /*&&*/ /*setIsDismissable(true)}*/}
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                          <Input size='lg' label="Title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="text-accent" variant='flat' />
                          <Input size='lg' label="Author" name='author' value={author} onChange={(e) => setAuthor(e.target.value)} className="text-accent" variant='flat' />
                          <Input size='lg' label="Description" name='description' onChange={(e) => setDescription(e.target.value)} value={description}  />
                          <Select ref={typeRef} label="Select type" defaultSelectedKeys={['possesion']}>
                            <SelectItem  key={'possesion'} value={'possesion'}>Possesion</SelectItem>
                            <SelectItem key={'wishlist'} value={'wishlist'}>Wishlist</SelectItem>
                          </Select>
                          <Input size='lg' type='number' step="0.01" label="Price" name='price' min={0} max={500} value={price} onChange={(e) => setPrice(e.target.value)} className="text-accent" variant='flat' />
                          <Input size='lg' label="Img Link" name='imgUrl' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} className="text-accent" variant='flat' />
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