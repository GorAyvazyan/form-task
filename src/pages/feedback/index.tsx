import { useState } from "react";
import { Form } from "../../components/form";
import { Modal } from "../../components/modal";

const Feedback = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col container mx-auto justify-center items-center my-12 px-4 lg:px-48 xl:px-96 h-full">
        <div className="w-full">
          <Form onSubmit={handleFormSubmit} />
          <Modal isOpen={modalOpen} onClose={handleModalClose} />
        </div>
      </div>
    </>
  );
};

export default Feedback;
