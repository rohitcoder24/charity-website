
import * as Yup from "yup";

export const singUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Plase enter your name"),
    email: Yup.string().email().required("No email  No Massage"),
    subject: Yup.string().min(2).max(1000).required("come on, you have a subject, don't you?"),
    message: Yup.string().min(10).max(1000).required(" um...yea, you have to write something to send this form."),

})