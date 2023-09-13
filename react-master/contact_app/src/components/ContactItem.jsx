import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ContactItem = ({input}) =>{

    const inputs = useSelector((state)=>state.input.inputs)
    const dispatch = useDispatch()

    const submitBtn = () => {
    }
}