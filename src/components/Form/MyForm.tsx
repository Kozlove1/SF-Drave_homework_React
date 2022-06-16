import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingFields } from "./MyForm.types";

function MyForm() {
    const { register, handleSubmit, formState: {errors,  }, reset } = useForm<IShippingFields>({
        mode: "onChange",
    })

    const onSubmit:SubmitHandler<IShippingFields> = (data) => {
        console.log(`Your ${data.nameLastnamePatronymic}`)
        reset()

    }

    return(
        <div>

        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register('nameLastnamePatronymic', {
                required: "Name invalid",
            })} 
            placeholder="ФИО"
            type="text"/>
            {errors?.nameLastnamePatronymic && (<div>{errors.nameLastnamePatronymic.message}</div>)}

            <input {...register('email', {
                required: "Email invalid",
                pattern: {
                    value: /@/,
                    message:"Please enter valid email!"
                }
            })} 
            placeholder="email"
            type="text"/>
            {errors?.nameLastnamePatronymic && (<div>{errors.email.message}</div>)}

            <div>
                <button>Send</button>
            </div>

        
        </form>

        </div>
    ) 

}

export default MyForm

