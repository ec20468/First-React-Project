export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //default BC value
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
