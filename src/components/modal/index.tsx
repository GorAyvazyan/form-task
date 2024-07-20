import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export const Modal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-center">
        <div className="bg-white py-8 px-12 rounded-lg shadow-md mx-2">
          <h2 className="text-2xl font-semibold mb-4 uppercase">{t("success")}</h2>
          <p>{t("yourMessageWasSent")}</p>
          <button
            className="mt-4 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg w-full uppercase"
            onClick={onClose}
          >
            {t("close")}
          </button>
        </div>
      </div>
    )
  );
};
