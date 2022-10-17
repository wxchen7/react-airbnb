const theme = {
  color: {
    primaryColor: '#FF385C',
    secondaryColor: '#00848A',
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222',
  },
  fontSize: {
    small: '12px',
    normal: '14px',
    large: '16px',
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
      box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
      }
    `,
  },
};

export default theme;
