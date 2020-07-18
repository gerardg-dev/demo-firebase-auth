const app = `/demos`;

export default {
  firebase: {
    auth: {
      home: "/demos/firebase/auth/"
    }
  },
  components: {
    wedevlopUI: {
      myForm: {
        home: "/demos/components/wedevlop-ui/my-form/"
      },
      stripeElements: {
        home: "/demos/components/wedevlop-ui/stripe-elements/",
        ops: {
          attachSource:
            "/demos/components/wedevlop-ui/stripe-elements/ops/attach-source/",
          createCharge:
            "/demos/components/wedevlop-ui/stripe-elements/ops/create-charge/",
          createSubscription:
            "/demos/components/wedevlop-ui/stripe-elements/ops/create-subscription/"
        },
        api: {
          customer:
            "/demos/components/wedevlop-ui/stripe-elements/api/customer/",
          charges: "/demos/components/wedevlop-ui/stripe-elements/api/charges/",
          subscriptions:
            "/demos/components/wedevlop-ui/stripe-elements/api/subscriptions/"
        }
      },
      fileUpload: {
        home: "/demos/components/wedevlop-ui/file-upload/"
      }
    }
  }
};
