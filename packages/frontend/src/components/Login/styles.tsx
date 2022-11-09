import styled from "styled-components";

export const InputUser = styled.input`
  width: 12em;
  padding: 3px;
`;

export const MsnLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px;
`;

export const MessengerWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20em;
  height: 35em;
  box-shadow: 0px 8px 6px -3px black;

  border-radius: 4px;

  /* fallback for old browsers */
  background: #ffffff;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(230, 235, 244, 0.5)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(230, 235, 244, 0.5)
  );
`;
export const Head = styled.div`
  width: 100%;
  margin-left: 1px;
  padding-left: 1px;
  box-shadow: 0 2px 6px -6px black;
  border-radius: 8px;
`;
export const HighDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3px;
  margin: 3px;
  width: 17em;
  height: 10em;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
  margin: 3px;
`;
export const Button = styled.button`
  width: 10em;
  border: 0.2px solid black;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0px 3px 3px -3px black;
`;

export const Lable = styled.label`
  margin-left: 3px;
  font-size: 13px;
  background: -webkit-linear-gradient(#4210cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
