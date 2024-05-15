<template>
	<main class="container">
		<!-- Your content goes here -->
		<section
			class="content h-75 w-75 p-4 border border-1 rounded-3 shadow-lg white">
			<header class="h4 text-uppercase"> leviticus 27.... </header>
			<p>
				These are the requirements for when a 
				<div class="inline me-1">
					<select name="" id="" class="red-text text-darken 2 p-1" v-model="gender">
						<option value="Male">Male</option>
						<option value="female">female</option>
					</select>

				</div>
				who is aged 
					<div class="inline mt-1">
						<input type="number" name="" id="number" value='0' class="red-text text-darken-2 " v-model="age">

					</div>
				shall make a singular vow unto the lord
			</p>
			<!-- line break -->
					<p class="w-100 my-1"><hr></p>
					
					
					<!-- the output -->
				<div class="grey lighten-2 p-1 ">
					{{ requirements }}
					
				</div>
		</section>
	</main>
</template>

<script>
import {isMale} from './utils/isMale'
import {isFemale} from './utils/isFemale'
	export default {
		data() {
			return {
				gender: "Male",
				age: 20,
				requirements:'place-holder test'
			};
		},
		watch: { 
			gender(val){
			if(val.toLowerCase()==='male'){
				this.requirements=isMale(this.age)
			}
			else if (val.toLowerCase()==='female'){
				this.requirements=isFemale(this.age)
			}
		},
		
},
created(){
	this.requirements=isMale(this.age)
}
		
	};
</script>

<style scoped>
	/* Apply Flexbox styles to center the content */
	.container {
		display: flex;
		justify-content: center; /* Horizontal alignment */
		width: 100%;
		align-items: center; /* Vertical alignment */
		height: 100vh; /*Make the container take up the full viewport height */
	}

	/* Additional styles for the content */
	.content {
		color: black;
		/* Add styling for your content here */
	}
	.inline{
		display:inline-block !important;
	}
	.inline:nth-of-type(2){
		border-radius: 30px !important;

	}


 select{
	outline:.05px solid;
	background: transparent;
	border:none;
 }

 #number{
	background-color: transparent;
	border: none;
	border-bottom: .5px solid;
	
	max-width: fit-content;
 }
</style>
