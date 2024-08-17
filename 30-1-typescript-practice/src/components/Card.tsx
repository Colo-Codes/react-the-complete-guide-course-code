const Card: React.FC<{ paragraph: string | undefined }> = (props) => {
  return (
    <>
      <h2>Paragraph on card:</h2>
      <p>{props.paragraph}</p>
    </>
  );
};

export default Card;
