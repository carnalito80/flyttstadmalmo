import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = 'Offert/Förfrågan', // optional subject of the notification email
  action = 'https://formspree.io/f/xrgrldjd'
}) => (
  <form
    className='Form'
    name={name}
    action={action}
    method='POST'
    
  >
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='text'
        placeholder='Namn (obligatoriskt)'
        name='namn'
        required
      />
    
    </label>
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='text'
        placeholder='Adress'
        name='adress'
  
      />
    
    </label>
    <span>Namn</span>

    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='email'
        placeholder='E-post (obligatoriskt)'
        name='email'
        required
      />
    </label>
    <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Telefonnummer"
              name="telefon"
            
            />
     </label>

     <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Kvadratmeter städyta (obligatoriskt)"
              name="kvadrat"
            
            />
     </label>
    
     <label className='Form--Label'>
      <textarea
        className='Form--Input Form--Textarea'
        placeholder='Meddelande'
        name='message'
        rows='10'
        required
      />
    </label>
    <input type='text' name='_gotcha' style={{ display: 'none' }} />
    {!!subject && <input type='hidden' name='subject' value={subject} />}
    <input type='hidden' name='form-name' value={name} />
    <input
      className='Button Form--SubmitButton'
      type='submit'
      value='Skicka Meddelande'
    />
  </form>
)
