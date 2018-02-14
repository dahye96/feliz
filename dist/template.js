'use strict';

new Vue({
  el: '#template',
  data: {
    title: {
      text: 'TITLE HERE',
      fontFamily: 'serif',
      fontSize: 26,
      textAlign: 'left'

    },
    subtitle: {
      text: 'TITLE HERE',
      fontFamily: 'serif',
      fontSize: 26,
      textAlign: 'left'

    }
  },
  methods: {
    fontSize: function fontSize(args) {
      console.log(args);
      this[args.target].fontSize = this[args.target].fontSize * 1 + args.delta * 1;
      console.log(this[args.target].fontSize);
    }
  }
});