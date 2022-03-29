<template>

    <div class="flex flex-wrap justify-center">
        <img v-bind:src="imageUrl"
        class="p-1 bg-white border rounded max-w-sm"
        />
    </div>

    <div class="flex justify-center">
        <div class="mb-3 w-96">
            <label for="formFile" class="form-label inline-block mb-2 ">Choose an image</label>
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

    <div class="flex justify-center">
        <div class = "mb-3 xl:w-96">
        <label for="nameOfImage" class="form-label inline-block mb-2 text-gray-700"> Name of Image</label>
        <input
        type="text"
        class="
            form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="nameOfImage"
        placeholder="Enter name"
        />
        </div>

    </div>

    <div class="flex justify-center">
        <div class = "mb-3 xl:w-96">
        <label for="descOfImage" class="form-label inline-block mb-2 text-gray-700"> Description </label>
        <input
        type="text"
        class="
            form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="descOfImage"
        placeholder="Description"
        />
        </div>
    </div>

    <div class="flex space-x-2 justify-center">
        <button @click= "upload" type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight 
        uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg 
        focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg 
        transition duration-150 ease-in-out">Upload</button>

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