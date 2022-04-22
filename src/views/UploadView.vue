<template>
 <top-nav/>
    <body class = " h-screen bg-upload-pic flex justify-center sm:mx-0	">
        <div class="container mx-auto p-6 grid grid-cols-2 gap-6 ">
            <div class="col-span-1 flex flex-col bg-pinkpur rounded-lg">
                 <div class="flex justify-center">
                    <div class="mb-3 w-96 flex-wrap text-center mt-10">
                        <label for="formFile" class="form-label  mb-2 ">Choose an image</label>
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
                        mt-3
                        h-40
                        w-30
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"
                        @change="onFilePicked">
                    </div>
                </div>

                <div class="flex flex-wrap justify-center mt-10 ">
                    <img v-bind:src="imageUrl"
                    class="p-1 bg-transparent border rounded max-w-sm"
                    />
                </div>

               
                
            </div>
            <div class="col-span-1 flex flex-col  bg-pinkpur rounded-lg h-300px">
            <div class="flex justify-center mt-10">
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
                        box-border h-10 w-35 p-4 border-4
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="nameOfImage"
                    placeholder="Enter name"
                    v-model = "imageName"
                    />
                    </div>

                </div>

                <div class="flex justify-center">
                    <div class = "mb-3 xl:w-100">
                    <label for="nameOfImage" class="form-label inline-block mb-2 text-gray-700"> Tag</label>
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
                        box-border w-35 p-4 border-4
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="tagOfImage"
                    placeholder="Travel,Cooking,Nature,...."
                    v-model = "imageTag"
                    />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class = "mb-5 xl:w-96">
                    <label for="descOfImage" class="form-label inline-block mb-2 text-gray-700"> Description </label>
                    <textarea
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
                         box-border h-40 w-35 p-4 border-4
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="descOfImage"
                    placeholder="Description"
                    v-model = "imageDescription"

                    />
                    </div>
                </div>

                <div class="flex space-x-5 justify-center">
                    <button @click="uploadToFirebase" type="button" class="inline-block px-10 py-3 bg-purple-700 text-white font-medium text-xs leading-tight 
                    uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg 
                    transition duration-150 ease-in-out">Upload</button>

                </div>
            </div>
        </div>
        <!-- <div class="grid grid-cols-2 gap-10 flex place-items-center min-h-max ">       
        
            <div class = "bg-purple-300   w-full p-20 rounded-lg">     
                <div class="flex flex-wrap justify-center  ">
                    <img v-bind:src="imageUrl"
                    class="p-1 bg-transparent border rounded max-w-sm"
                    />
                </div>

                <div class="flex justify-center">
                    <div class="mb-3 w-96 flex justify-center">
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
            </div>    

            <div class= "bg-purple-300 w-full p-10 rounded-lg">
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
                    v-model = "imageName"
                    />
                    </div>

                </div>

                <div class="flex justify-center">
                    <div class = "mb-3 xl:w-96">
                    <label for="nameOfImage" class="form-label inline-block mb-2 text-gray-700"> Tag</label>
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
                    id="tagOfImage"
                    placeholder="Travel,Cooking,Nature,...."
                    v-model = "imageTag"
                    />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class = "mb-3 xl:w-96">
                    <label for="descOfImage" class="form-label inline-block mb-2 text-gray-700"> Description </label>
                    <textarea
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
                    v-model = "imageDescription"

                    />
                    </div>
                </div>

                <div class="flex space-x-2 justify-center">
                    <button @click="uploadToFirebase" type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight 
                    uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg 
                    transition duration-150 ease-in-out">Upload</button>

                </div>
            </div> -->
        <!-- </div>  -->
    </body>

    
</template>

<script>
import {db,storage} from '@/firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadString,getDownloadURL  } from "firebase/storage";
import { getAuth } from '@firebase/auth';
import TopNav from '../components/TopNav.vue';


export default {
      components: {
    TopNav,
  },
    data() {
       return {
            imageUrl : '',
            imageName : '',
            imageTag : '',
            imageDescription : '',
            imageDownloadUrl : null,
            fileName : ''
            }
    },

    methods:{
        onFilePicked(event) {
            const files = event.target.files;
            const fileReader = new FileReader();
            fileReader.addEventListener('load',() => {
                this.imageUrl = fileReader.result;
                this.fileName = files[0].name;
            })
            fileReader.readAsDataURL(files[0]);
            
        },

        uploadToFirebase() {
            const storageRef = ref(storage, this.fileName);
            uploadString(storageRef, this.imageUrl, 'data_url').then((snapshot) => {
                console.log('Uploaded a data_url string!');
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    console.log(downloadUrl);
                    this.imageDownloadUrl = downloadUrl;
                    this.pushToFireStore();
                });
            }
            );
            this.$router.push('home');
        },

        pushToFireStore(){
            const post = {
                userId: getAuth().currentUser.uid,
                userName: getAuth().currentUser.displayName,
                imageName: this.imageName,
                imageTag: this.imageTag,
                imageDescription: this.imageDescription,
                imageDownloadUrl: this.imageDownloadUrl
            };
            console.log(this.imageDownloadUrl);
            
            const docRef = addDoc(collection(db, "posts"), post);
        }

    }
}
</script>

<style scoped>
.input-container {
  display: grid;
  grid-column-gap: 10rem;
}


</style>