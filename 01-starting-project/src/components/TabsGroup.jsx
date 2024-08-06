export default function TabsGroup({ tabButtons, children, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{tabButtons}</ButtonsContainer>
      {children}
    </>
  );
}
