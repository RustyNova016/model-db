import {SubmitHandler, useForm} from 'react-hook-form';
import {signIn, useSession} from "next-auth/react";
import axios from "axios";
import {CommonStyle} from "../../components/pagesStyles/commonStyle";
import {PageTitle} from "../../components/content/PageTitle";
import ContentDiv from "../../components/layout/ContentDiv";


export default function Register() {
    const session = useSession();
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();


    type Inputs = {
        name: string,
        password: string,
    };


    const onSubmit: SubmitHandler<Inputs> = async data => {
        const res = await axios.post("http://localhost:3000/api/user/register", data)

        if (res.status === 200) {
            signIn()
        }

        //alert(JSON.stringify(`${res.data}, status: ${res.status}`));
    };

    return <>
        <CommonStyle>
            <PageTitle title={"Creer un compte"}/>

            <ContentDiv>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        {/* register your input into the hook by invoking the "register" function */}
                        <label className="form-label">Nom</label>
                        <input placeholder={"name"} className="form-control" {...register("name", {required: true})} />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mot de passe</label>
                        <input className="form-control" {...register("password", {required: true})} />
                    </div>

                    <input type="submit"/>

                </form>
            </ContentDiv>
        </CommonStyle>
    </>

}