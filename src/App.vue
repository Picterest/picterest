<template>
  <div class="">
    <TopNav />
    <div class="px-20 w-full flex flex-wrap">
      <div v-for="(arr, index) in subArrays" :key="index" class="w-1/5">
        <div v-for="(card, i) in arr" :key="i" class="w-full">
          <div class="w-full p-2">
            <Card :src="`${card.src}`" :board="`${card.recommended}`" class="w-full h-full"/>
            <div class="text-sm leading-tight pt-2">
              <p class="font-bold"> {{ card.title }} </p>
              <p> {{ card.user }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './TopNav.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    Card
  },
  computed: {
    subArrays() {
      var length = Math.ceil(this.cards.length / 5);

      const result = new Array(length)
        .fill()
        .map((i) => {
          console.log(i)
          return this.cards.splice(0, length)
        })

        return result
    }
  },
  data() {
    return {
      cards: [
        {
          src: 'https://i.pinimg.com/236x/44/db/87/44db879361a769a6e6b27d917bf5c0c1.jpg',
          title: 'Title 1',
          user: 'User 1',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/03/7d/40/037d40d6815ec77fa4d6d48199682944.jpg',
          title: 'Title 2',
          user: 'User 2',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/e7/60/13/e760139c4ea069c3bebc9a29ab8634f9.jpg',
          title: 'Title 3',
          user: 'User 3',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/ad/6f/5a/ad6f5a8c005179296fe952ff2e972dc5.jpg',
          title: 'Title 4',
          user: 'User 4',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/21/b6/ae/21b6aecb8ac5e252b99d46c61058678b.jpg',
          title: 'Title 5',
          user: 'User 5',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/7c/99/2f/7c992f248dc993d0e964439dc001e97d.jpg',
          title: 'Title 6',
          user: 'User 6',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/35/0e/c2/350ec2d3cf699f1115d998925ba14c89.jpg',
          title: 'Title 7',
          user: 'User 7',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/46/f8/30/46f830383afed5e9eb279d0fc20f4f16.jpg',
          title: 'Title 8',
          user: 'User 8',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/c9/04/50/c90450870b652bba1be7120d2d279c37.jpg',
          title: 'Title 9',
          user: 'User 9',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/72/58/8f/72588f0a453decc4967e2879605411b9.jpg',
          title: 'Title 10',
          user: 'User 10',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/5f/3c/ce/5f3cce568b06cbc58abd13fef6d9d0f8.jpg',
          title: 'Title 11',
          user: 'User 11',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/03/82/58/038258affc828fe2a7ad1fe1b3e547fd.jpg',
          title: 'Title 12',
          user: 'User 12',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/99/03/bd/9903bdca1e9e297ff74b1390b27a4179.jpg',
          title: 'Title 13',
          user: 'User 13',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/83/bf/e0/83bfe0775d95b30be3557e7077501dda.jpg',
          title: 'Title 14',
          user: 'User 14',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/76/a6/66/76a6665176297a4e174001c3cd904b90.jpg',
          title: 'Title 15',
          user: 'User 15',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/de/5d/ca/de5dcaf5546b282ac8b15bbcb9e85e40.jpg',
          title: 'Title 16',
          user: 'User 16',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/e0/f3/27/e0f3270d61824be61dcb85c2cafd0f63.jpg',
          title: 'Title 17',
          user: 'User 17',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/66/a4/aa/66a4aa5cb37e8fb102ba1801f5c372ae.jpg',
          title: 'Title 18',
          user: 'User 18',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/37/c9/32/37c932d5a71bbeb055580518178351fa.jpg',
          title: 'Title 19',
          user: 'User 19',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/f9/19/b8/f919b80f31a9bf210509052e72182850.jpg',
          title: 'Title 20',
          user: 'User 20',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/4c/7f/8c/4c7f8c27bcd7ccce5f1e20919ff143f0.jpg',
          title: 'Title 21',
          user: 'User 21',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/64/08/c6/6408c618c3a8ec557c0a7a57694cad30.jpg',
          title: 'Title 22',
          user: 'User 22',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/08/b8/d4/08b8d444dfe974673f130e41d3a60227.jpg',
          title: 'Title 13',
          user: 'User 13',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/1b/0b/eb/1b0beba9e3f42d063dd61037e5dd8802.jpg',
          title: 'Title 14',
          user: 'User 14',
          recommended: 'Travel'
        },
        {
          src: 'https://i.pinimg.com/236x/02/fd/6f/02fd6feb19ec797a52a3367a73dd2c2c.jpg',
          title: 'Title 15',
          user: 'User 15',
          recommended: 'Travel'
        },
      ]
    }
  }
}
</script>

<style src="./assets/tailwind.css" />
