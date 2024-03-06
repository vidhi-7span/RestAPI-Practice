<template>
  <div class="border bg-white rounded-md allside-shadow">
    <div class="">
      <div class="p-4">
        <!-- Profile Details -->
        <div class="">Profile Details</div>
        <!-- Profile Pic -->
        <ImageUpload :imageData="ProfileImage" @update="saveImage" />
      </div>
      <div class="border-t p-4">
        <VForm @submit="submit()" class="">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- First Name -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">First Name</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="firstname"
                  v-model="firstName"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="firstname"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Last Name -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Last Name</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="lastname"
                  v-model="lastName"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="lastname"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Email -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Email</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="email"
                  v-model="email"
                  class="p-2 w-full"
                  rules="required|email"
                />
              </div>
              <ErrorMessage
                name="email"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Organization -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Organization</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="organization"
                  v-model="organization"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="organization"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Phone Number -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Phone Number</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="phonenumber"
                  v-model="phonenumber"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="phonenumber"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Address -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Address</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="textarea"
                  name="address"
                  v-model="address"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="address"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Language -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Language</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="language"
                  v-model="language"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="language"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Currency -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Currency</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="currency"
                  v-model="currency"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="currency"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>

            <!-- Timezone -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Timezone</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="timezone"
                  v-model="timezone"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="timezone"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>
          </div>
          <!-- Form Controller -->
          <div class="flex items-center justify-center gap-4 mt-5">
            <PButton type="submit" label="Submit Form" />
            <SButton type="reset" label="Reset" @click.native="resetform()" />
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "@/store/user";

export default {
  // Setting up pinia.
  setup() {
    const user = useUserStore();
    return {
      user,
    };
  },
  created() {
    const data = this.user.getUser;
    if (data) {
      this.firstName = data?.FirstName;
      this.lastName = data?.LastName;
      this.email = data?.Email;
      this.organization = data?.Organization;
      this.phonenumber = data?.PhoneNumber;
      this.address = data?.Address;
      this.language = data?.Language;
      this.currency = data?.Currency;
      this.timezone = data?.TimeZone;
      this.ProfileImage = data?.ProfileImage;
    }
  },
  computed: {},
  data() {
    return {
      ProfileImage: "",
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      phonenumber: "",
      address: "",
      language: "",
      currency: "",
      timezone: "",
      profileImage: null,
    };
  },
  methods: {
    saveImage(image) {
      if (image) {
        this.profileImage = image;
      } else this.profileImage = null;
    },
    submit() {
      const data = {
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.email,
        Organization: this.organization,
        PhoneNumber: this.phonenumber,
        Address: this.address,
        Language: this.language,
        Currency: this.currency,
        TimeZone: this.timezone,
        ProfileImage: this.profileImage,
      };
      this.user.setUser(data);
      // console.log("Data : ", data);
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.profileImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    resetimage() {
      // Reset the input and preview of image
      this.profileImage = null;
    },
    resetform() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.organization = "";
      this.phonenumber = "";
      this.address = "";
      this.language = "";
      this.currency = "";
      this.timezone = "";
      this.profileImage = null;
    },
  },
};
</script>
<style lang=""></style>
