const AuthTel = (string) => [...string].every((c) => '0123456789'.includes(c));

export default AuthTel;
