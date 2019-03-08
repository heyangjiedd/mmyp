import Api from "../utils/Api";

export default {
    methods: {
        async upload(event, f) {
            let formData = new FormData();
            formData.append("fileData", event.target.files[0]);
            formData.append("type", 'USER');
            let response = await Api.Upload(formData);
            if (!f) {
                this.afterUpload(response.data.data);
            } else {
                f(response.data.data);
            }
        }
    }
}
