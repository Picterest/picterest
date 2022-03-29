<template>

    <div class="flex justify-center">
        <div class="mb-3 w-96">
            <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Default file input example</label>
            <input class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"
            @change="onFilePicked">
        </div>
    </div>

    <div class="flex flex-wrap justify-center">
        <img v-bind:src="imageUrl"
        class="p-1 bg-white border rounded max-w-sm"
        />
        
    </div>




</template>

<script>
export default {
    data() {
       return {
            imageUrl : ''
            }
    },

    methods:{
        onFilePicked(event) {
            const files = event.target.files;
            const fileReader = new FileReader();
            fileReader.addEventListener('load',() => {
                this.imageUrl = fileReader.result;
            })
            fileReader.readAsDataURL(files[0]);

        },
    }
}
</script>

<style>

</style>