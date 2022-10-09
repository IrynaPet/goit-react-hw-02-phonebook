import React, { Component }  from "react";

class ContactForm extends Component {
    state = {
    name: '',
    number: ''
    };

handelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value})
   };
  
    handelSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({ ...this.state });
        this.setState({name: '', number: ''});
    };
         
    render() {
        return (
             <form onSubmit={this.handelSubmit} className="">
         <div className="">       
            <label htmlFor="">Name
            <input
            onChange={this.handelChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </label>
        </div>
        <div className="">    
            <label htmlFor="">Number
                <input
                onChange={this.handelChange}
                type="tel"
                name="number"
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
        </label>
        </div>
        <button type="submit" className="">Add contact</button>
          </form>
  
      )
  }
}


export default ContactForm;