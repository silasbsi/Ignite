interface AlertInfoProps {
  message: string;
  type?: string;
}

const AlertInfo: React.FC<AlertInfoProps> = ({
  message = "",
  type = "danger",
}) => {
  return (
    <div
      style={{ width: "-webkit-fill-available" }}
      className={`alert alert-${type}`}
    >
      {message}
    </div>
  );
};

export default AlertInfo;
