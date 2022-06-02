import {useSession} from "next-auth/react";
import {CommonStyle} from "../../components/pagesStyles/commonStyle";
import {PageTitle} from "../../components/content/PageTitle";
import ContentDiv from "../../components/layout/ContentDiv";
import {SubmitHandler, useForm} from "react-hook-form";
import {useQuery} from "react-query";
import axios from "axios";

function AddModel() {
    const session = useSession();
    //const { isLoading, error, data } = useQuery("Send Data", () => axios.post("http://localhost:3000/api/model_page/submit", ));
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    type Inputs = {
        name: string,
        description: string,
        picture: string,
        author: string,
    };


    const onSubmit: SubmitHandler<Inputs> = async data => {
        console.log(data);

        const res = await axios.post("http://localhost:3000/api/model_page/submit", data)

        alert(JSON.stringify(`${res.data}, status: ${res.status}`));
    };

    return <>
        <CommonStyle>
            <PageTitle title={"Share a model"}/>

            <ContentDiv>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        {/* register your input into the hook by invoking the "register" function */}
                        <label className="form-label">Nom</label>
                        <input placeholder={"name"} className="form-control" {...register("name", {required: true})} />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" {...register("description")} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">URL de l'image</label>
                        <input className="form-control" {...register("picture")} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Auteur</label>
                        <input className="form-control" {...register("author", {required: true})} />
                        {errors.author && <span>This field is required</span>}
                    </div>

                    <input type="submit"/>

                </form>
            </ContentDiv>
        </CommonStyle>
    </>

}

export default AddModel;