import type {NextPage} from 'next'
import {CommonStyle} from "../../components/pagesStyles/commonStyle";
import {PageTitle} from "../../components/content/PageTitle";
import {CenteredDiv} from "../../components/layout/CenteredDiv";
import ContentDiv from "../../components/layout/ContentDiv";
import {useRouter} from "next/router";
import Link from "next/link";
import {useState} from "react";
import {useForm} from "react-hook-form";

type FormInputs = {
    username: string,
    password: string
}

const LoginPage: NextPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {register, handleSubmit, watch, formState} = useForm<FormInputs>();

    function onSubmit(data: any) {
        // Prevent page reload
        console.log("Login form submitted");
        console.log(data);

        //return userService.login(event.target.valueOf(), password)
        //    .then(() => {
        //        // get return url from query parameters or default to '/'
        //        const returnUrl = router.query.returnUrl || '/';
        //        router.push(returnUrl).then();
        //    })
        //.catch(alertService.error);
    }

    return (
        <>
            <CommonStyle>
                <PageTitle title={"Login"}></PageTitle>
                <CenteredDiv>
                    <ContentDiv sides={true}>
                        <div className="card">
                            <h4 className="card-header">Login</h4>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-group">
                                        <label>Username</label>

                                        <input type="text"
                                               className="form-control"
                                               {...register("username")}/>

                                        {/*<div className="invalid-feedback">{errors.username?.message}</div>*/}
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password"
                                               className="form-control"
                                               {...register("password")}/>
                                        {/*<div className="invalid-feedback">{errors.password?.message}</div>*/}
                                    </div>
                                    <button className="btn btn-primary">
                                        {formState.isSubmitting &&
                                            <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        Login
                                    </button>
                                    <Link href="/account/register" className="btn btn-link">Register</Link>
                                </form>
                            </div>
                        </div>

                    </ContentDiv>
                </CenteredDiv>
            </CommonStyle>
        </>

    )
}

export default LoginPage