<script lang="ts">
	import ngoIcon from '$assets/icons/ngo.png';
	import lupeIcon from '$assets/icons/lupe.png';
	import database from '$assets/icons/database.png';
</script>

<div class="w-full bg-primary-500 p-10 flex sm:flex-col justify-between">
	<div class="flex flex-col items-center p-5 sm:mb-10">
		<div class="">
			<img class="" src={lupeIcon} alt="" />
		</div>

		<div class="w-[420px] sm:w-[250px] mt-10">
			<h1 class="text-3xl text-center text-white">For The Public</h1>
			<p class="text-center mt-5 text-white">
				We visualise plastic pollution across the oceans, make abstract numbers easier to grasp and
				educate the public about the marine pollution threat.
			</p>
		</div>
	</div>
	<div class="flex flex-col items-center p-5 sm:mb-10">
		<div class="">
			<img class="" src={ngoIcon} alt="" />
		</div>

		<div class="w-[420px] sm:w-[250px] mt-10">
			<h1 class="text-3xl text-center text-white">For Cleanup NGOs</h1>
			<p class="text-center mt-5 text-white">
				We equip NGOs with up-to-date data on areas with the highest plastic concentrations,
				enabling more focused and effective cleanup operations.
			</p>
		</div>
	</div>
	<div class="flex flex-col items-center p-5 sm:mb-10">
		<div class="">
			<img class="" src={database} alt="" />
		</div>

		<div class="w-[420px] sm:w-[250px] mt-10">
			<h1 class="text-3xl text-center text-white">For Researchers</h1>
			<p class="text-center mt-5 text-white">
				We offer in-depth data insights to dissect the origins, trajectories, and destinations of
				marine plastics laying the foundation for predictive analytics on future plastic
				accumulations.
			</p>
		</div>
	</div>
</div>
