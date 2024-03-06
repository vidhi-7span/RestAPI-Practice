<template>
  <div class="py-2 flex items-center justify-start gap-4 border">
    <div class="">
      <img
        @click="$refs.imageInput.click()"
        v-if="CroppedImage"
        :src="CroppedImage ? CroppedImage : imageData"
        class="h-20 w-20 rounded-lg"
      />
      <IconMdiProfile class="h-20 w-20 rounded-lg text-gray-400" v-else />
      <!-- Upload photo and show preview here -->
      <input
        type="file"
        @change="previewImage"
        ref="imageInput"
        style="display: none"
        accept="image/*"
      />

      <!-- Image Upload -->
      <div class="" v-if="isCropping">
        <imageCropper ref="cropper" class="cropper" :src="ProfileImage" />
        <PButton label="Crop image" @click.native="cropImage" />
        <SButton label="Cancel Crop" @click.native="cancelCrop" />
      </div>
    </div>
    <div class="sapce-y-4" v-if="!isCropping">
      <div class="flex items-center justify-start gap-2">
        <PButton
          @click.native="$refs.imageInput.click()"
          label="Upload New Photo"
        />
        <SButton @click.native="resetimage" label="Reset" />
      </div>
      <span class="text-gray-500">
        Allowed JPG, GIF, or PNG. Max size of 800K
      </span>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["update"],
  props: {
    imageData: String,
  },
  //   Set Watcher for iMage
  data() {
    return {
      ProfileImage: null,
      CroppedImage: null,
      isCropping: false,
    };
  },
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult();
      this.CroppedImage = result.canvas.toDataURL("image/jpg");
      this.isCropping = false;
      this.ProfileImage = null;
      this.$emit("update", this.CroppedImage);
    },
    cancelCrop() {
      this.isCropping = false;
      this.ProfileImage = null;
      this.$emit("update");
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.ProfileImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
      this.isCropping = true;
    },
    resetimage() {
      // Reset the input and preview of image
      this.ProfileImage = null;
      this.CroppedImage = null;
      this.$emit("update");
    },
  },
};
</script>
