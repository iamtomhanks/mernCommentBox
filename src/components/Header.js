import React from 'react'
import '../css/Header.css'
/** https://github.com/github/fetch **/
import 'whatwg-fetch'
import $ from 'jquery'


const ROOT_PATH = '';

function validateElement(self, singleName, singleType){
  /**
   * @param {this} self
   * @return {State} updates x_error state
   */
   if(singleName!==undefined){
     var data = {name: singleName, type: singleType};
     checkValidation(self, data);
   }else{
     var had_error = false;
     validationObject.forEach(function(i){
       if(checkValidation(self, i)){
         had_error = true;
       }
     });
     return had_error;
   }
}

function checkValidation(self, i){
  var had_error = false;
  switch(i.type) {
      case 'null':
          if(self.state[i.name].length < 1){
            had_error = true;
            self.setState({full_name_error:true})
          }else{
            self.setState({full_name_error:false})
          }
          break;
      case 'email':
          if(!validateEmail(self.state[i.name])){
            had_error = true;
            self.setState({email_error:true})
          }else{
            self.setState({email_error:false})
          }
          break;
      case 'phone':
          if(self.state[i.name].length < 9){
            had_error = true;
            self.setState({phone_error:true})
          }else{
            self.setState({phone_error:false})
          }
          break;
      case 'disclaimer':
          var data = {};
          if(!self.state[i.name]){
            had_error = true;
            data[i.name+'_error']=true;
            self.setState(data);
          }else{
            data[i.name+'_error']=false;
            self.setState(data);
          }
          break;
      default:
          console.log('The provided type is undefined.');
  }
  return had_error;
}

/** {name:'phone', type:'phone'} **/

var validationObject = [
  {name:'full_name', type:'null'},
  {name:'email', type:'email'},
  {name:'DisclaimerClicked', type:'disclaimer'}
];

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function autoPhone(eID){
	$("."+eID).on("keyup paste input", function(event) {
    var input = this.value.replace(/[^0-9\(\)\s\-]/g, "");
    var inputlen = input.length;
    var numbers = this.value.replace(/\D/g,'');
    var numberslen = numbers.length;
    var newval = "";
    for(var i=0;i<numberslen;i++){
        if(i==0) newval=""+numbers[i];
        else if(i==3) newval+="-"+numbers[i];
        else if(i==6) newval+="-"+numbers[i];
        else newval+=numbers[i];
    }
    if(inputlen>=1&&numberslen==0&&input[0]=="(") newval="(";
    else if(inputlen>=6&&numberslen==3&&input[4]==")"&&input[5]==" ") newval+=") ";
    else if(inputlen>=5&&numberslen==3&&input[4]==")") newval+=")";
    else if(inputlen>=6&&numberslen==3&&input[5]==" ") newval+=" ";
    else if(inputlen>=10&&numberslen==6&&input[9]=="-") newval+="-";

    $(this).val(newval.substring(0,12));
});
}
function setBreezeLogo(){
  var form = $('.FormContainer').height();
  var text = $('.FormButtonText').offset().top;
  var logo = $('.FormLogo').height();
}

function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }else{
		var expires = "";
	}
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(a, b) {
    b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function getQueryParam(param) {
    var found;
    window.location.search.substr(1).split("&").forEach(function(item) {
        if (param ==  item.split("=")[0]) {
            found = item.split("=")[1];
        }
    });
    return found;
};

export default class Header extends React.Component {
  constructor(props) {
    /**
     * @param {Props} props
     * @return {Bind} this.handler
     */
    super(props);
    this.state = {
      AlreadyUpClicked: false,
      DisclaimerClicked: false,
      full_name: '',
      email: '',
      phone: '',
      referrer: '',
      utm_campaign:'',
      utm_source:'',
      utm_medium: '',
      validated: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.alreadyUpClick = this.alreadyUpClick.bind(this);
    this.closePopup = this.closePopup.bind(this);

  }
  componentDidMount(){
    /**
     * dom is ready
     * @return {State} state
     */
    this.setState({
      referrer: document.referrer,
      utm_medium: getQueryParam('utm_medium'),
      utm_source: getQueryParam('utm_source'),
      utm_campaign: getQueryParam('utm_campaign')
    });

    this.isLoggedIn();
    $(window).on('load resize', function(){
      setBreezeLogo();
    });

    /** Setup phone **/
    autoPhone('phone');

    $(document).ready(function(){
      var int = setInterval(function(){
        if($('#lhnchatimg').length==1){
          clearInterval(int);
          $('#lhnchatimg').attr({'src':'images/live_chat.jpg'});
        }
      },25);
      $('.chat_text, .message_box > img').on('click', function(){
        $('#lhnChatButton > a').click();
      });
    });
  }
  closePopup(e){
    $('#popupModal').hide();
  }
  alreadyUpClick(e){
    $('.full_name, .phone, .FormDisclaimerContainer').toggle();

    //reset errors
    this.setState({full_name_error: false, email_error: false, phone_error: false, DisclaimerClicked_error: false});

    if($('.FormButtonText').text()=='SIGN UP'){
      $('.FormButtonText').text('SIGN IN');
      this.setState({AlreadyUpClicked:true});
    }else{
      $('.FormButtonText').text('SIGN UP');
      this.setState({AlreadyUpClicked:false});
    }
  }
  handleClick(e) {
    /**
     * handles checkbox clicks
     * @param {Element} e
     * @return {State} state
     */
    var id = e.target.id;
    var state = {};
    state[id] = !this.state[id];
    var self = this;
    this.setState(state, function(){
      validationObject.forEach(function(val){
        if(val.name===id){
          validateElement(self, val.name, val.type);
        }
      });
    });
  }
  submitRequest(){
    /**
     * submits form ajax
     * @return {AJAX} data
     */
     var self = this;
     var stateCopy = this.state;
     stateCopy.phone = $('.phone').val();

    fetch(ROOT_PATH+'/mailchimp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stateCopy)
    }).then(function(data){
      setCookie('reg', 'true', 3000000);
      self.signInState();
      $('#popupModal').show();
      console.log(data);
      window.submitDataLayer();
    })
  }
  signInState(){
    $('.FormContainer').hide();
    $('.carousel-indicators').addClass('carouselReset');
    $('.BreezeLogoOverlay').show();
  }
  isLoggedIn(){
    var self = this;
    if(getCookie('reg')!=''){
      self.signInState();
    }
  }
  submitLogin(){
    /**
     * submits form ajax
     * @return {AJAX} data
     */
     var self = this;
     $.ajax({
      method: 'POST',
      url: ROOT_PATH+'/login',
      data: {email:this.state.email},
      success: function (data, textStatus, jqXHR) {
        if(data){
          setCookie('reg', 'true', 3000000);
          self.signInState();
        }
      }
    });
  }
  submitForm(e){
    /**
     * perform validation and form submission
     * @param {Element} e
     * @return {State} state
     */
     switch(this.state.AlreadyUpClicked){
       case true:
         if(!validateElement(this, 'email', 'email'))
           this.submitLogin();
         break;
       case false:
         if(!validateElement(this))
           this.submitRequest();
         break;
     }
  }
  inputChange(e){
    /**
     * updates the state on input change
     * @param {Element} e
     * @return {State} state
     */
    var element = e.target.getAttribute('data-type');
    var state = {};
    var self = this;
    state[element] = e.target.value;
    console.log(state[element]);
    this.setState(state, function(){
      validationObject.forEach(function(val){
        if(val.name===element){
          validateElement(self, val.name, val.type);
        }
      });
    });
  }

  render(){
    return (
    <div className="CarouselContainer">
    <img src="images/breeze_logo.png" className="BreezeLogoOverlay" />
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>

      <div className="carousel-inner">
        <div className="item active i1">
          <img src="/images/1.jpg" alt="Los Angeles" />
        </div>
        <div className="item i2">
          <img src="/images/2.jpg" alt="Chicago" />
        </div>
        <div className="item i3">
          <img src="/images/3.jpg" alt="New York" />
        </div>
        <div className="item i4">
          <img src="/images/4.jpg" alt="New York" />
        </div>
        <div className="item i5">
          <img src="/images/5.jpg" alt="New York" />
        </div>
      </div>

      <div className="FormContainer">
        <div className="FormHeader">
          <h1 className="FormTitle">Sign Up Today</h1>
          <p className="FormText">for instant access to home designs. Plus<br />
          priority updates and your preview invite.</p>
          <img src="images/blueTriangle.png" className="BlueTriangle" />
        </div>
        <div className="AlreadyUpContainer">
          <span id="AlreadyUpClicked"
            className={`
              FormCheckmark
              ${this.state.AlreadyUpClicked?'checkActive':''}
            `}
            onClick={this.alreadyUpClick}>
          </span>
          <p id="AlreadyUpClicked" className="FormAlreadyUpText" onClick={this.alreadyUpClick}>I'm already signed up</p>
        </div>
        <input type="text" placeholder="FULL NAME*"
         className={`FormInput ${this.state.full_name_error?'InvalidInput':''} full_name`}
         onChange={this.inputChange} data-type="full_name" />
        <input type="text" placeholder="EMAIL*" className="FormInput"
        className={`FormInput ${this.state.email_error?'InvalidInput':''} email`}
        onChange={this.inputChange} data-type="email" />
        <input type="tel" placeholder="PHONE" className="FormInput"
        className={`FormInput ${this.state.phone_error?'InvalidInput':''} phone`}
        onChange={this.inputChange} data-type="phone" />
        <div className="FormDisclaimerContainer">
          <span id="DisclaimerClicked"
            className={`
              ${this.state.DisclaimerClicked?'checkActive':''}
              ${this.state.DisclaimerClicked_error?'InvalidInput':''}
              FormCheckmark`}
            onClick={this.handleClick}>
          </span>
          <p className="FormDisclaimerText" id="DisclaimerClicked" onClick={this.handleClick}>All fields marked with* are mandatory. By submitting this form, I agree to receive information, marketing material, and updates in regards to Breeze.
          I understand that I can unsubscribe at any time.</p>
          <div className="Clear"></div>
        </div>
        <div className="FormButton">
          <span className="FormButtonText" onClick={this.submitForm}>SIGN UP</span>
        </div>
        <img src="images/breeze.gif" className="FormLogo" />
      </div>

      </div>
      <div id="popupModal" className="modal fade" role="dialog">
        <div className="popupDialog">
          <div className="modal-content">
            <div className="popupInner">
              <img src="images/x.png" className="popupClose" onClick={this.closePopup} />
              <a href="images/Breeze_Bungalow_Towns.pdf" target="blank" download="">
                <img src="images/desktop_popup.jpg" className="popupImage" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

};
