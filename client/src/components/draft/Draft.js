import React, { Fragment, useEffect } from 'react';


const Draft = (props) => {
  useEffect(() => {

    props.initialDraft(JSON.parse(localStorage.getItem("draft")) || []);
    props.setCurrentTab('draft')
  }, []);


  const selectDraftForModal = (id) => {
    const draft = props.draftLocal.find(el => el._id == id);
    props.selectDraftForModalDraft(draft)
    props.setShowModalDraft(true);
  }
  const choosenCheckbox = (e) => {
    const temp = props.selectedCheckBox.find(el => el == e.target.id);
    (temp) ? props.removeSelectedCheckBox(e.target.id) : props.setselectedCheckBox(e.target.id)
  }
  return (
    <Fragment>
      {
        props.draftLocal.map(el => {
          return (
            <div key={el._id}>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" id={el._id} onChange={(e) => choosenCheckbox(e)} checked={props.selectedCheckBox.includes(el._id.toString())} />
              </div>
              <div onClick={() => selectDraftForModal(el._id)} >
                <div>Кому:{el.whomSend}</div>
                <li>Тема:{el.subject}</li>
                <li>text:{el.text}</li>
              </div>
            </div>
          )
        })
      }
    </Fragment>
  )
}
export default Draft