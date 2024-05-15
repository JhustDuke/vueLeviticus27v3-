<template>
	<main class="container">
		<!-- Your content goes here -->
		<section
			class="content h-75 w-75 p-4 border border-1 rounded-3 shadow-lg white">
			<header class="h4 text-uppercase"> leviticus 27.... </header>
			<div
				class="lh-base fw-normal"
				style="font-size: 12px !important">
				these are the requirements for when a
				<span>
					<select
						v-model="gender"
						class="fw-bold red-text text-darken-2"
						style="
							outline: 1px solid;

							background-color: transparent !important;
							border: none !important;
						">
						<option
							class="op"
							value="Man/male"
							selected
							>Male</option
						>
						<option value="Female">Female</option>
					</select>
				</span>
				shall make a singular vow, the persons shall be for the Lord by thy
				estimation. 3. And thy estimation shall be of the
				<span class="red-text fw-bold text-darken-2">{{ gender }}</span> from
				<span>
					age
					<input
						type="number"
						v-model="age" />
				</span>
				to age
				<span>
					<input
						type="number"
						v-model="model" />
				</span>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				gender: "Male",
				age: 0,
				max: "",
			};
		},
	};
</script>

<style>
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
</style>
