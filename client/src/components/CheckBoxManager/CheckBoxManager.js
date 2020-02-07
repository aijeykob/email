import React, { Fragment } from 'react';

const CheckBoxManager = (props) => {
  const changeStatusToMany = (e) => {
    props.setStatusToMany(props.selectedCheckBox, e.target.name, props.currentTab)
  }
  const deleteDraft = (e) => {

    const temp = JSON.parse(localStorage.getItem("draft"));
    console.log(typeof (temp))


    // props.deleteDraftToMany(props.selectedCheckBox)
  }
  return (
    <Fragment>
      {
        (props.selectedCheckBox[0]) ?
          <div>
            {
              (props.currentTab == 'draft') ?
                <button onClick={() => deleteDraft()}> Удалить?</button>

                :
                <div >
                  <button name={'delete'} onClick={(e) => changeStatusToMany(e)}>Удалить ?</button>
                  <button name={'noDelete'} onClick={(e) => changeStatusToMany(e)}>Восстановить?</button>
                  <button name={'spam'} onClick={(e) => changeStatusToMany(e)}>спам?</button>
                  <button name={'noSpam'} onClick={(e) => changeStatusToMany(e)}>Убрать из спама?</button>
                  <button name={'read'} onClick={(e) => changeStatusToMany(e)}>Отметить прочитанными ?</button>
                  <button name={'unread'} onClick={(e) => changeStatusToMany(e)}>Отметить  не прочитанными?</button>
                </div>
            }
          </div>
          : null
      }
      {

      }
    </Fragment >
  )
}


export default CheckBoxManager