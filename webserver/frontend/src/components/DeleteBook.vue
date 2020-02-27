<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Você tem certeza que quer apagar o livro?</h3>
                <p>Título: {{this.element.title}}</p>
                <p>Descrição : {{this.element.description}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteBook" variant="danger">Excluir</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from axios

export default {
    data() {
        return {
            bookId: this.$route.params.bookId,
            element: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        getBook() {
            const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`
            axios.get(path).then((response) => {
                this.element.title = response.data.title
                this.element.description = response.data.description
            })
            .cath((error) => {
                console.log(error)
            })
        },
        deleteBook(){
            const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`
            axios.delete(path).then((response) => {
                location.href='/books'
            })
            .cath((error) => {
                alert("Não é possível excluir o livro!!")
            })
        }
    },
    created() {
        this.getBooks()
    }
}
</script>

<style lang="css" scoped>

</style>