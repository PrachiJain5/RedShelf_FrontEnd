import Ember from 'ember';

//Refer to ember component documentation as necessary: http://emberjs.com/api/classes/Ember.Component.html
export default Ember.Component.extend({

  defaultToLarge: Ember.on('init', function(){
    //http://emberjs.com/api/classes/Ember.Object.html#method_set
    this.set("isSmall", false);
  }),

  //set in html-css-exercise template
  bigMessage: '',

  //set in html-css-exercise template template
  smallMessage: '',

  isSmall: false,

  classNames: ["shrinking-box"],

  //https://guides.emberjs.com/v2.12.0/components/customizing-a-components-element/
  classNameBindings: ['isSmall:is-small:is-large'],

  click: function(){
    this.set("isSmall", true);
    //toggle this component's isSmall property here
    if("isSmall", true){
      var myElement = document.querySelector(".shrinking-box");
      myElement.style.backgroundColor = "rgb(12, 89, 100)";
      myElement.style.width = "200px";
      myElement.style.height = "200px";
      myElement.style.color = "white";
      myElement.style.transition = "all 500ms";
    }

  }

});