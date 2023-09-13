import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ContactReducerActions } from "../redux/reducers/counterSlice";

const ContactForm = () => {
  const inputNameRef = useRef(null);
  const inputNumRef = useRef(null);

  const inputs = useSelector((state) => state.input.inputs);
  const dispatch = useDispatch();

  const clickSubmit = () => {
    let inputName= inputNameRef.current.value;
    let inputNum = inputNumRef.current.value
    console.log(inputName,inputNum);

    dispatch(
      ContactReducerActions.addInput({
        id: uuidv4(),
        
      })
    );

    inputName.current.value = "";
    inputNum.current.value=''
    inputName.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        className="InputName"
        placeholder="이름 입력"
        ref={inputNameRef}
      />
      <input
        type="text"
        className="InputNum"
        placeholder="번호 입력"
        ref={inputNumRef}
      />

      <input
        type="button"
        className="Submit"
        value="등록"
        onClick={clickSubmit}
      />
    </div>
  );
};
export default ContactForm;
