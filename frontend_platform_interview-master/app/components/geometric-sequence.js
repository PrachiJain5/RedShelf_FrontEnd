import Ember from 'ember';

export default Ember.Component.extend({

  init: function(){
    this.initializeSequence();
    this._super();
  },

  initializeSequence: function(){
    //geometric sequence of ^2: 1, 2, 4, 8, 16, etc...
    this.set("geometricSequence", Ember.A([1, 2, 4]));
  },

  classNames: ["geometric-sequence"],

  //set in component initializer
  geometricSequence: null,

  //reverse sequence is rendered in geometric-sequence.hbs
  reverseSequence: Ember.computed('geometricSequence', 'geometricSequence.@each', function() {
    var sequence = this.get("geometricSequence");
    var reverse = sequence;

    //reverse the array here. Add a comment to test sequence

    // var reverse = sequence.reverse();

    return reverse;
  }),

  actions:{
    updateSequence: function(){
      var sequence = this.get("geometricSequence");
      if (sequence.length <= 2) return true;
      var a = sequence[1],                   
          r = a / sequence[0],               // ratio of first 2
          i = sequence[sequence.length-1];

      console.log(sequence)
      sequence.push(i *= r);
 
      //alert("Trying to update sequence (You can remove this alert)");

      //Modify the sequence here


     //remove smallest number when there are more than 10 items in the array.
      if(sequence.length >= 10)
          return sequence.shift();
      else
          return sequence;

    //array reaches 2^15, reset the array to it's original content

    if(sequence.length >= 15)
      this.initializeSequence();

    }
  }
});