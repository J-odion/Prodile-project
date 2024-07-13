export type SignUpProps = {
    name: string;
    email: string;
    password: string;
  };


  export type LoginProps = {
    email: string;
    password: string;
  };


  export type ConfirmOtpProps = {
    email: string;
    otp_code: string;
  };
