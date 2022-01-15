package com.solitapreassignment.farmdata.bucket;

public enum BucketName {

    PROFILE_IMAGE("solita-farm");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }
    public String getBucketName() {
        return bucketName;
    }
}
