import { Dialog } from "@headlessui/react";

const ProductDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <Dialog.Panel>
        <Dialog.Title>Product Detail</Dialog.Title>
        <button onClick={onClose}>Close</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ProductDialog;


