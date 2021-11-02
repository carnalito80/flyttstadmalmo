import React, { Fragment } from 'react'
// import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Flyttstädning-Helsingborg',
    subject: 'Flyttstädning-Helsingborg', // optional subject of the notification email
    action: 'https://formspree.io/f/xrgrldjd',
    method: 'POST',
    successMessage: 'Tack för din förfrågan, vi hör av oss inom kort',
    errorMessage: 'Nått gick snett, var vänlig e-maila eller ring oss.'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return
    const form = e.target
    const data = serialize(form)
    if (data.info !== '') {
      this.setState({
        alert: "Informationen inte skickad (I). Tack!",
        disabled: true
      })
        return
    }
    if (data.email !== '') {
      this.setState({
        alert: "Informationen inte skickad (E). Tack!",
        disabled: true
      })
        return
    }
    this.setState({ disabled: true })
    fetch(form.action, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:  stringify(data),
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          console.log(res);
        // throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <Fragment>
        {/* <Helmet>
          {<script src="https://www.google.com/recaptcha/api.js" />}
        </Helmet> */}
        <form
          className="Form"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
         
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
           
      <label className='Form--Label'>
      <input
        className='Form--Input  Form--InputText'
        type='text'
        placeholder='Namn'
        name='namn'
        required
      />
       <span>Namn</span>
    </label>
    <label className='Form--Label'>
      <input
        className='Form--Input Form--InputText'
        type='text'
        placeholder='Adress'
        name='adress'
        required
      />
       <span>Adress</span>
    </label>
    <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Personnummer"
              name="personnr"
              required
            />
             <span>Personnummer</span>
     </label>
    <label className='Form--Label'>
      <input
        className='Form--Input Form--InputText'
        type='email'
        placeholder='E-post'
        name='epost'
        required
      />
       <span>E-post</span>
    </label>
    <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Telefonnummer"
              name="telefon"
              required
              />
             <span>Telefonnummer</span>
     </label>
     <label className="Form--Label ">
            <input
              className="Form--Input  "
              type="date"
              placeholder="Datum för städning"
              name="datum"
              required
            />
             <span className="Form--InputTextRdy" >Datum för städning</span>
     </label>
     <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Övriga Städytor / Övrig Info"
              name="ovrigt"
              
              />
             <span>Övriga Städytor / Övrig Info (Ej obligatorisk)</span>
     </label>
     <div >
         <fieldset>
           
           <label class="Form--Label Form--Radio">
           
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="49"
           required
         />
           <span>0-49 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="59"
           />
           <span>50-59 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="69"
           />
           <span>60-69 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="79"
           />
           <span>70-79 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="89"
           />
           <span>80-89 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="99"
           />
           <span>90-99 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="114"
           />
           <span>100-114 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="124"
           />
           <span>115-124 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="136"
           />
           <span>125-136 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="148"
           />
           <span>137-148 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="159"
           />
           <span>149-159 kvm</span>
           </label>
           <label class="Form--Label Form--Radio">
           <input 
           className="Form--RadioInput"
           type="radio"
           name="kvadrat"
           value="160+"
           />
           <span>160+ kvm</span>
           </label>
           </fieldset>
           </div>

         
        
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <label class="Form--Shelf"><span>email</span>
          <input autocomplete="off" className="Form--Shelf" type="email" name="email" value="" />
          </label>
       
          <label class="Form--Shelf"><span>info</span>
          <input autocomplete="off" className="Form--Shelf" type="text" name="info" placeholder="your info" value="" />
          </label>
         <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Boka nu"
            disabled={this.state.disabled}
          />
        </form>
      </Fragment>
    )
  }
}

export default Form
