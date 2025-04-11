package com.example.flyhas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "managers")
public class Manager extends BaseUser {

    @NotBlank(message = "Type in Manager ID")
    private String managerId;

    @NotBlank(message = "Provide National ID")
    private String nationalId;

    @NotBlank(message = "Reveal operations branch")
    private String branch;

    @NotBlank(message = "Responsibility area is required")
    private String responsibilityArea;

    @Override
    public String getRole() {
        return "MANAGER";
    }

    public String getManagerId() {
        return managerId;
    }

    public void setManagerId(String managerId) {
        this.managerId = managerId;
    }

    public String getNationalId() {
        return nationalId;
    }

    public void setNationalId(String nationalId) {
        this.nationalId = nationalId;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getResponsibilityArea() {
        return responsibilityArea;
    }

    public void setResponsibilityArea(String responsibilityArea) {
        this.responsibilityArea = responsibilityArea;
    }
}
