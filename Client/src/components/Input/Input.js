function Input({ inp, setInp, el }) {
  function changeInp(e) {
    setInp({ ...inp, [e.target.name]: e.target.value });
  }

  return (
    <input
      placeholder={el.placeholdervalue}
      type={el.inpType}
      onChange={changeInp}
      name={el.name}
    />
  );
}

export default Input;
