<script setup lang="ts">
import PageHeader from "../components/PageHeader.vue";
import PageMenu from "../components/PageMenu.vue";
import SectionAbout from "../components/SectionAbout.vue";
import SectionExperience from "../components/SectionExperience.vue";
import SectionSkills from "../components/SectionSkills.vue";
import SectionContact from "../components/SectionContact.vue";

const about = "about section";
const experience = "experience section";
const skills = "skills section";
const contact = "contact section";
</script>

<template>
  <PageHeader />
  <PageMenu class="hidden md:block" />
  <SectionAbout :text="about" />
  <SectionExperience :text="experience" />
  <SectionSkills :text="skills" />
  <SectionContact :text="contact" />
</template>
