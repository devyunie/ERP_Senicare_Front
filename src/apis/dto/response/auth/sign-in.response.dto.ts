import ResponseDto from "../response.dto";

// interface 로그인 response body dto //
export default interface SignInResponseDto extends ResponseDto{
    accessToken :string;
    expiration : number;
}