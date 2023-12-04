import { motion } from "framer-motion";
const AdminConfirmModal = (params: {
  handleDelete: any;
  handleModalClose: any;
}) => {
  return (
    <motion.div
      initial={{ translateY: "-100%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      className="flex items-center text-xl font-medium bg-theme-1 text-white rounded-lg justify-center flex-col gap-4 p-4"
    >
      <h1>Are you sure?</h1>
      <h2>You are about to delete this Poem: {}</h2>
      <div className="flex gap-4 items-center justify-center">
          <motion.button
            whileTap={{ scale: 1.4 }}
            onClick={() => {
                params.handleDelete()
                params.handleModalClose()
            }}
            className="p-4 font-medium text-black text-2xl rounded-md transition-all hover:scale-110 bg-theme-4"
          >
            Delete it
          </motion.button>
          <motion.button
            whileTap={{ scale: 1.4 }}
            onClick={() => {
                params.handleModalClose()
            }}
            className="p-4 font-medium text-black text-2xl rounded-md transition-all hover:scale-110 bg-theme-4"
          >
            No go back!
          </motion.button>
      </div>
    </motion.div>
  );
};

export default AdminConfirmModal;
