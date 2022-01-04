const Type = {
  MASTER: 0,
  INFO: 1,
  ACTION: 2,
};
export default [
  {
    label: "LABEL.EMPLOYEE",
    controller: "Employee",
    group: "EMPLOYEE_TABLE",
    type: Type.MASTER,
    path: [
      {
        feature: "EmployeeListPage",
        path: "/hrm/employee/employeetable",
      },
      {
        feature: "EmployeeItemPage",
        path: "/hrm/employee/employeetable/:id",
      },
    ],
  },
  {
    label: "LABEL.POSITION_TRANS",
    controller: "PositionTrans",
    group: "POSITION_TRANS_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "PositionTransListPage",
        path: "/hrm/employee/positiontrans-hr",
      },
      {
        feature: "PositionTransItemPage",
        path: "/hrm/employee/positiontrans-hr/:id",
      },
    ],
  },
  {
    label: "LABEL.RESIGN_STATUS_EMPLOYEE",
    controller: "ResignStatusEmployee",
    group: "RESIGN_STATUS_EMPLOYEE",
    type: Type.MASTER,
    path: [
      {
        feature: "ResignListPage",
        path: "/hrm/employee/resignstatusemployee",
      },
      {
        feature: "ResignItemPage",
        path: "/hrm/employee/resignstatusemployee/:id",
      },
    ],
  },
  {
    label: "LABEL.BACKTOWORK",
    controller: "Backtowork",
    group: "BACKTOWORK",
    type: Type.MASTER,
    path: [
      {
        feature: "BacktoworkListPage",
        path: "/hrm/employee/backtowork",
      },
      {
        feature: "BacktoworkItemPage",
        path: "/hrm/employee/backtowork/:id",
      },
    ],
  },
  {
    label: "LABEL.WELFARE",
    controller: "Welfare",
    group: "WELFARE",
    type: Type.MASTER,
    path: [
      {
        feature: "WelfareListPage",
        path: "/hrm/employee/welfare",
      },
      {
        feature: "WelfareItemPage",
        path: "/hrm/employee/welfare/:id",
      },
    ],
  },
  {
    label: "LABEL.TIMETICKET",
    controller: "Timeticket",
    group: "TIMETICKET",
    type: Type.MASTER,
    path: [
      {
        feature: "TimeticketListPage",
        path: "/hrm/employee/timeticket",
      },
      {
        feature: "TimeticketItemPage",
        path: "/hrm/employee/timeticket/:id",
      },
    ],
  },
  {
    label: "LABEL.LEAVE_TRANS_HR",
    controller: "LeaveTrans",
    group: "LEAVE_TRANS_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "LeaveTransListPage",
        path: "/hrm/employee/leavetrans-hr",
      },
      {
        feature: "LeaveTransItemPage",
        path: "/hrm/employee/leavetrans-hr/:id",
      },
    ],
  },
  {
    label: "LABEL.LEAVE_TRANS_LEAD",
    controller: "LeaveTrans",
    group: "LEAVE_TRANS_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "LeaveTransListPage",
        path: "/hrm/employee/leavetrans-lead",
      },
      {
        feature: "LeaveTransItemPage",
        path: "/hrm/employee/leavetrans-lead/:id",
      },
    ],
  },
  {
    label: "LABEL.RESIGN_HR",
    controller: "Resign",
    group: "RESIGN_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "ResignListPage",
        path: "/hrm/employee/resignhr",
      },
      {
        feature: "ResignItemPage",
        path: "/hrm/employee/resignhr/:id",
      },
    ],
  },
  {
    label: "LABEL.RESIGN_LEAD",
    controller: "Resign",
    group: "RESIGN_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "ResignListPage",
        path: "/hrm/employee/resignlead",
      },
      {
        feature: "ResignItemPage",
        path: "/hrm/employee/resignlead/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_ADJUST_POSITION_LEAD",
    controller: "PositionTrans",
    group: "REQUEST_ADJUST_POSITION_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "PositionTransListPage",
        path: "/hrm/employee/positiontrans-lead",
      },
      {
        feature: "PositionTransItemPage",
        path: "/hrm/employee/positiontrans-lead/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_ADJUST_POSITION_HR",
    controller: "PositionTrans",
    group: "REQUEST_ADJUST_POSITION_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "PositionTransListPage",
        path: "/hrm/employee/positiontrans-hr",
      },
      {
        feature: "PositionTransItemPage",
        path: "/hrm/employee/positiontrans-hr/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_ADJUST_PROBATION_LEAD",
    controller: "ProbationTrans",
    group: "REQUEST_ADJUST_PROBATION_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "ProbationTransListPage",
        path: "/hrm/employee/probationtrans-lead",
      },
      {
        feature: "ProbationTransItemPage",
        path: "/hrm/employee/probationtrans-lead/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_ADJUST_PROBATION_HR",
    controller: "ProbationTrans",
    group: "REQUEST_ADJUST_PROBATION_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "ProbationTransListPage",
        path: "/hrm/employee/probationtrans-hr",
      },
      {
        feature: "ProbationTransItemPage",
        path: "/hrm/employee/probationtrans-hr/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_ADJUST_SALARY_LEAD",
    controller: "SalaryTrans",
    group: "REQUEST_ADJUST_SALARY_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "SalaryTransListPage",
        path: "/hrm/employee/salarytrans-lead",
      },
      {
        feature: "SalaryTransItemPage",
        path: "/hrm/employee/salarytrans-lead/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_ADJUST_SALARY_HR",
    controller: "SalaryTrans",
    group: "REQUEST_ADJUST_SALARY_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "SalaryTransListPage",
        path: "/hrm/employee/salarytrans-hr",
      },
      {
        feature: "SalaryTransItemPage",
        path: "/hrm/employee/salarytrans-hr/:id",
      },
    ],
  },
  {
    label: "LABEL.HOME",
    controller: "MainMenu",
    group: "HOME",
    type: Type.MASTER,
    path: [
      {
        feature: "HomeListPage",
        path: "/home",
      },
      {
        feature: "HomeItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.ADDRESS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_ADDRESS",
    type: Type.INFO,
    path: [
      {
        feature: "AddressListPage",
        path: "/hrm/employee/employeetable/:id/info/address",
      },
      {
        feature: "AddressItemPage",
        path: "/hrm/employee/employeetable/:id/info/address/:id",
      },
    ],
  },
  {
    label: "LABEL.BOOKMARKDOCUMENT_TEMPLATE",
    controller: "BookmarkdocumentTemplate",
    group: "BookmarkdocumentMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "BookmarkdocumentTemplateListPage",
        path: "/setup/bookmarkdocumenttemplate/bookmarkdocumenttemplate",
      },
      {
        feature: "BookmarkdocumentTemplateItemPage",
        path: "/setup/TransferTransItemPage/bookmarkdocumenttemplate/:id",
      },
    ],
  },
  {
    label: "LABEL.HRM",
    controller: "MainMenu",
    group: "HRMMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "HRMListPage",
        path: "/home",
      },
      {
        feature: "HRMItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.ASSESSMENT_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_ASSESSMENT_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "AssessmentTransListPage",
        path: "/hrm/employee/employeetable/:id/info/assessmenttrans",
      },
      {
        feature: "AssessmentTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/assessmenttrans/:id",
      },
    ],
  },
  {
    label: "LABEL.INVENTORY",
    controller: "MainMenu",
    group: "InventoryMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "InventoryListPage",
        path: "/home",
      },
      {
        feature: "InventoryItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.ATTACHMENT",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_ATTACHMENT",
    type: Type.INFO,
    path: [
      {
        feature: "AttachmentListPage",
        path: "/hrm/employee/employeetable/:id/info/attachment",
      },
      {
        feature: "AttachmentItemPage",
        path: "/hrm/employee/employeetable/:id/info/attachment/:id",
      },
    ],
  },
  {
    label: "LABEL.LOGISTIC",
    controller: "MainMenu",
    group: "LogisticMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "LogisticListPage",
        path: "/home",
      },
      {
        feature: "LogisticItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.CERTIFICATE_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_CERTIFICATE_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "CertificateTransListPage",
        path: "/hrm/employee/employeetable/:id/info/certificatetrans",
      },
      {
        feature: "CertificateTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/certificatetrans/:id",
      },
    ],
  },
  {
    label: "LABEL.PURCHASE",
    controller: "MainMenu",
    group: "PurchaseMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "PurchaseListPage",
        path: "/home",
      },
      {
        feature: "PurchaseItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.CONTACT",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_CONTACT",
    type: Type.INFO,
    path: [
      {
        feature: "ContactListPage",
        path: "/hrm/employee/employeetable/:id/info/contact",
      },
      {
        feature: "ContactItemPage",
        path: "/hrm/employee/employeetable/:id/info/contact/:id",
      },
    ],
  },
  {
    label: "LABEL.CRM",
    controller: "MainMenu",
    group: "CrmMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "CrmListPage",
        path: "/home",
      },
      {
        feature: "CrmItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.EDUCATION",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_EDUCATION",
    type: Type.INFO,
    path: [
      {
        feature: "ContactListPage",
        path: "/hrm/employee/employeetable/:id/info/education",
      },
      {
        feature: "ContactItemPage",
        path: "/hrm/employee/employeetable/:id/info/education/:id",
      },
    ],
  },
  {
    label: "LABEL.MRP",
    controller: "MainMenu",
    group: "MrpMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "MrpListPage",
        path: "/home",
      },
      {
        feature: "MrpItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.EMERGENCY_CONTACT",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_EMERGENCY_CONTACT",
    type: Type.INFO,
    path: [
      {
        feature: "EmergencyContactListPage",
        path: "/hrm/employee/employeetable/:id/info/emergencycontact",
      },
      {
        feature: "EmergencyContactItemPage",
        path: "/hrm/employee/employeetable/:id/info/emergencycontact/:id",
      },
    ],
  },
  {
    label: "LABEL.MAINTENANCE",
    controller: "MainMenu",
    group: "MaintenanceMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "MaintenanceListPage",
        path: "/home",
      },
      {
        feature: "MaintenanceItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.LEAVE_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_LEAVE_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "LeaveTransListPage",
        path: "/hrm/employee/employeetable/:id/info/leavetrans",
      },
      {
        feature: "LeaveTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/leavetrans/:id",
      },
    ],
  },
  {
    label: "LABEL.BUGETING",
    controller: "MainMenu",
    group: "BudgetingMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "BudgetingListPage",
        path: "/home",
      },
      {
        feature: "BudgetingItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.ONSITE",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_ONSITE",
    type: Type.INFO,
    path: [
      {
        feature: "OnsiteListPage",
        path: "/hrm/employee/employeetable/:id/info/onsite",
      },
      {
        feature: "OnsiteItemPage",
        path: "/hrm/employee/employeetable/:id/info/onsite/:id",
      },
    ],
  },
  {
    label: "LABEL.ACCOUNT",
    controller: "MainMenu",
    group: "AccountMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "AccountListPage",
        path: "/home",
      },
      {
        feature: "AccountItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.PROBATION_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_PROBATION_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "ProbationTransListPage",
        path: "/hrm/employee/employeetable/:id/info/probationtrans",
      },
      {
        feature: "ProbationTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/probationtrans/:id",
      },
    ],
  },
  {
    label: "LABEL.ADMINISTRATOR",
    controller: "MainMenu",
    group: "AdministratorMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "AdministratorListPage",
        path: "/home",
      },
      {
        feature: "AdministratorItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.POSITION_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_POSITION_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "PositionTransListPage",
        path: "/hrm/employee/employeetable/:id/info/positiontrans",
      },
      {
        feature: "PositionTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/positiontrans/:id",
      },
    ],
  },
  {
    label: "LABEL.SETUP",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "SetupListPage",
        path: "/home",
      },
      {
        feature: "SetupItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.ORGANIZATION",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "OrganizationListPage",
        path: "/organization",
      },
      {
        feature: "OrganizationItemPage",
        path: "/organization",
      },
    ],
  },
  {
    label: "LABEL.HRM",
    controller: "MainMenu",
    group: "SetupMenu_Hrm",
    type: Type.MASTER,
    path: [
      {
        feature: "HrmListPage",
        path: "/setup/hrm",
      },
      {
        feature: "HrmListPage",
        path: "/setup/hrm",
      },
    ],
  },
  {
    label: "LABEL.COMPANY",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "CompanyListPage",
        path: "/company",
      },
      {
        feature: "CompanyItemPage",
        path: "/company",
      },
    ],
  },
  {
    label: "LABEL.COMPANY_CATEGORY",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "CompanyCategoryListPage",
        path: "/companycategory",
      },
      {
        feature: "CompanyCategoryItemPage",
        path: "/companycategory",
      },
    ],
  },
  {
    label: "LABEL.BRANCH",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "BranchListPage",
        path: "/branch",
      },
      {
        feature: "BranchItemPage",
        path: "/branch",
      },
    ],
  },
  {
    label: "LABEL.DEPARTMENT",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "DepartmentListPage",
        path: "/department",
      },
      {
        feature: "DepartmentItemPage",
        path: "/department",
      },
    ],
  },
  {
    label: "LABEL.POSITION",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "PositionListPage",
        path: "/position",
      },
      {
        feature: "PositionItemPage",
        path: "/position",
      },
    ],
  },
  {
    label: "LABEL.TAX",
    controller: "MainMenu",
    group: "SetupMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "TaxListPage",
        path: "/tax",
      },
      {
        feature: "TaxItemPage",
        path: "/tax",
      },
    ],
  },
  {
    label: "LABEL.RESPONSIBILITY_DEVICE",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_RESPONSIBILITY_DEVICE",
    type: Type.INFO,
    path: [
      {
        feature: "ResponsibilityDeviceListPage",
        path: "/hrm/employee/employeetable/:id/info/responsibilitydevice",
      },
      {
        feature: "ResponsibilityDeviceItemPage",
        path: "/hrm/employee/employeetable/:id/info/responsibilitydevice/:id",
      },
    ],
  },
  {
    label: "LABEL.SALARY_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_SALARY_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "SalaryTransListPage",
        path: "/hrm/employee/employeetable/:id/info/salarytrans",
      },
      {
        feature: "SalaryTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/salarytrans/:id",
      },
    ],
  },
  {
    label: "LABEL.TIMETICKET",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_TIMETICKET",
    type: Type.INFO,
    path: [
      {
        feature: "TimeticketListPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket",
      },
      {
        feature: "TimeticketItemPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id",
      },
    ],
  },
  {
    label: "LABEL.TIMETICKET",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_TIMETICKET_INFO_JOB_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "TimeTicketJobTransListPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id/info/jobtrans",
      },
      {
        feature: "TimeTicketJobTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id/info/jobtrans/:id",
      },
    ],
  },
  {
    label: "LABEL.TRAINING_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_TRAINING_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "TrainingTransListPage",
        path: "/hrm/employee/employeetable/:id/info/trainingtrans",
      },
      {
        feature: "TrainingTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/trainingtrans/:id",
      },
    ],
  },
  {
    label: "LABEL.TRANSFER_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_TRANSFER_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "TransferTransListPage",
        path: "/hrm/employee/employeetable/:id/info/transfertrans",
      },
      {
        feature: "TransferTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/transfertrans/:id",
      },
    ],
  },
  {
    label: "LABEL.WARNING_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_WARNING_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "WarningTransListPage",
        path: "/hrm/employee/employeetable/:id/info/warningtrans",
      },
      {
        feature: "WarningTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/warningtrans/:id",
      },
    ],
  },
  {
    label: "LABEL.WELFARE_DETAIL",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_WELFARE_DETAIL",
    type: Type.INFO,
    path: [
      {
        feature: "WelfareListPage",
        path: "/hrm/employee/employeetable/:id/info/welfaredetail",
      },
      {
        feature: "WelfareItemPage",
        path: "/hrm/employee/employeetable/:id/info/welfaredetail/:id",
      },
    ],
  },
  {
    label: "LABEL.RESIGN_TRANS",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_INFO_RESIGN_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "ResignListPage",
        path: "/hrm/employee/employeetable/:id/info/resigntrans",
      },
      {
        feature: "ResignItemPage",
        path: "/hrm/employee/employeetable/:id/info/resigntrans/:id",
      },
    ],
  },
  {
    label: "LABEL.ADJUST_PROBATION",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_ACTION_ADJUST_PROBATION",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustProbationItemPage",
        path: "/hrm/employee/employeetable/:id/action/adjustprobation",
      },
    ],
  },
  {
    label: "LABEL.ADJUST_POSITION",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_ACTION_ADJUST_POSITION",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustPositionItemPage",
        path: "/hrm/employee/employeetable/:id/action/adjustposition",
      },
    ],
  },
  {
    label: "LABEL.ADJUST_SALARY",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_ACTION_ADJUST_SALARY",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustSalaryItemPage",
        path: "/hrm/employee/employeetable/:id/action/adjustsalary",
      },
    ],
  },
  {
    label: "LABEL.ADJUST_TRANSFER",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_ACTION_ADJUST_TRANSFER",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustTransferItemPage",
        path: "/hrm/employee/employeetable/:id/action/adjusttransfer",
      },
    ],
  },
  {
    label: "LABEL.RESIGN",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_ACTION_RESIGN",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustResignItemPage",
        path: "/hrm/employee/employeetable/:id/action/adjustresign",
      },
    ],
  },
  {
    label: "LABEL.BACK_TO_WORK",
    controller: "Employee",
    group: "RESIGN_STATUS_EMPLOYEE_ACTION_BACK_TO_WORK",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustResignItemPage",
        path: "/hrm/employee/resignstatusemployee/:id/action/adjustbacktowork",
      },
    ],
  },
  {
    label: "LABEL.LEAVE_TRANS_APPROVED",
    controller: "Employee",
    group: "LEAVE_TRANS_ACTION_LEAVE_TRANS_APPROVED",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustResignItemPage",
        path: "/hrm/employee/leavetrans-lead/:id/action/adjustleavetransapproved",
      },
    ],
  },
  {
    label: "LABEL.LEAVE_TRANS_REJECT",
    controller: "Employee",
    group: "LEAVE_TRANS_ACTION_LEAVE_TRANS_REJECT",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustResignItemPage",
        path: "/hrm/employee/leavetrans-lead/:id/action/adjustleavetransreject",
      },
    ],
  },
  {
    label: "LABEL.COMPANY_CATEGORY",
    controller: "CompanyCategory",
    group: "COMPANY_CATEGORY",
    type: Type.MASTER,
    path: [
      {
        feature: "CompanyCategoryListPage",
        path: "/setup/organization/companycategory",
      },
      {
        feature: "CompanyCategoryItemPage",
        path: "/setup/organization/companycategory/:id",
      },
    ],
  },
  {
    label: "LABEL.BRANCH",
    controller: "Branch",
    group: "BRANCH",
    type: Type.MASTER,
    path: [
      {
        feature: "BranchListPage",
        path: "/setup/organization/branch",
      },
      {
        feature: "BranchItemPage",
        path: "/setup/organization/branch/:id",
      },
    ],
  },

  {
    label: "LABEL.DEPARTMENT",
    controller: "department",
    group: "DEPARTMENT",
    type: Type.MASTER,
    path: [
      {
        feature: "DepartmentListPage",
        path: "/setup/organization/department",
      },
      {
        feature: "DepartmentItemPage",
        path: "/setup/organization/department/:id",
      },
    ],
  },
  {
    label: "LABEL.POSITION",
    controller: "Organization",
    group: "POSITION",
    type: Type.MASTER,
    path: [
      {
        feature: "PositionListPage",
        path: "/setup/organization/position",
      },
      {
        feature: "PositionItemPage",
        path: "/setup/organization/position/:id",
      },
    ],
  },
  {
    label: "LABEL.WORK_TIME_TYPE",
    controller: "Worktimetype",
    group: "WORK_TIME_TYPE",
    type: Type.MASTER,
    path: [
      {
        feature: "PositionListPage",
        path: "/setup/hrm/worktimetype",
      },
      {
        feature: "PositionItemPage",
        path: "/setup/hrm/worktimetype/:id",
      },
    ],
  },

  {
    label: "LABEL.ASSESSMENT",
    controller: "AssessmentTrans",
    group: "ASSESSMENT",
    type: Type.MASTER,
    path: [
      {
        feature: "AssessmentTransListPage",
        path: "/setup/hrm/assessmenttrans",
      },
      {
        feature: "AssessmentTransItemPage",
        path: "/setup/hrm/assessmenttrans/:id",
      },
    ],
  },

  {
    label: "LABEL.JOB_LEVEL",
    controller: "JobLevel",
    group: "JOB_LAVEL",
    type: Type.MASTER,
    path: [
      {
        feature: "JobLevelListPage",
        path: "/setup/hrm/joblevel",
      },
      {
        feature: "JobLevelItemPage",
        path: "/setup/hrm/joblevel/:id",
      },
    ],
  },
  {
    label: "LABEL.SALARY",
    controller: "Salary",
    group: "SALARY",
    type: Type.MASTER,
    path: [
      {
        feature: "SalaryListPage",
        path: "/setup/hrm/salary",
      },
      {
        feature: "SalaryItemPage",
        path: "/setup/hrm/salary/:id",
      },
    ],
  },
  {
    label: "LABEL.NATIONALITY",
    controller: "Nationality",
    group: "NATIONALITY",
    type: Type.MASTER,
    path: [
      {
        feature: "NationalityListPage",
        path: "/setup/hrm/nationality",
      },
      {
        feature: "NationalityItemPage",
        path: "/setup/hrm/nationality/:id",
      },
    ],
  },
  {
    label: "LABEL.CERTIFICATE_TYPE",
    controller: "CertificateType",
    group: "CERTIFICATE_TYPE",
    type: Type.MASTER,
    path: [
      {
        feature: "CertificateTypeListPage",
        path: "/setup/hrm/certificatetype",
      },
      {
        feature: "CertificateTypeItemPage",
        path: "/setup/hrm/certificatetype/:id",
      },
    ],
  },
  {
    label: "LABEL.ASSESSMENT_TRANS_TYPE",
    controller: "AssessmentTransType",
    group: "ASSESSMENT_TRANS_TYPE",
    type: Type.MASTER,
    path: [
      {
        feature: "AssessmentTransTypeListPage",
        path: "/setup/hrm/assessmenttranstype",
      },
      {
        feature: "AssessmentTransTypeItemPage",
        path: "/setup/hrm/assessmenttranstype/:id",
      },
    ],
  },
  {
    label: "LABEL.DASHBOARD_HR",
    controller: "HR",
    group: "DASHBOARD_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "DashboardPageComponent",
        path: "/hrm/dashboard/todolist-hr",
      },
    ],
  },
  {
    label: "LABEL.DASHBOARD_LEAD",
    group: "DASHBOARD_LEAD",
    controller: "LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "DashboardPageComponent",
        path: "/hrm/dashboard/todolist-lead",
      },
    ],
  },
  {
    label: "LABEL.DASHBOARD_EMP",
    group: "DASHBOARD_EMP",
    controller: "EMPLOYEE",
    type: Type.MASTER,
    path: [
      {
        feature: "DashboardPageComponent",
        path: "/hrm/dashboard/todolist-emp",
      },
    ],
  },
  {
    label: "LABEL.ACCESSRIGHT",
    controller: "AccessRights",
    group: "ACCESSRIGHT",
    type: Type.MASTER,
    path: [
      {
        feature: "AccessRightsListPage",
        path: "/administrator/assessright",
      },
      {
        feature: "AccessRightsItemPage",
        path: "/administrator/assessright/:id",
      },
    ],
  },
  {
    label: "LABEL.ROLES",
    controller: "Role",
    group: "ROLE",
    type: Type.MASTER,
    path: [
      {
        feature: "RoleListPage",
        path: "/administrator/role",
      },
      {
        feature: "RoleItemPage",
        path: "/administrator/role/:id",
      },
    ],
  },
  {
    label: "LABEL.USERS",
    controller: "User",
    group: "USERS",
    type: Type.MASTER,
    path: [
      {
        feature: "UserListPage",
        path: "/administrator/user",
      },
      {
        feature: "UserItemPage",
        path: "/administrator/user/:id",
      },
    ],
  },
  {
    label: "LABEL.SUBSCRIBE",
    controller: "Subscribe",
    group: "SUBSCRIBE",
    type: Type.MASTER,
    path: [
      {
        feature: "SubscribeListPage",
        path: "/administrator/subscribe",
      },
      {
        feature: "SubscribeItemPage",
        path: "/administrator/subscribe/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_OVERTIME",
    controller: "Overtime",
    group: "REQUEST_OVERTIME",
    type: Type.MASTER,
    path: [
      {
        feature: "OvertimeListPage",
        path: "/hrm/employee/employeetable/:id/info/overtime",
      },
      {
        feature: "OvertimeItemPage",
        path: "/hrm/employee/employeetable/:id/info/overtime/:id",
      },
    ],
  },
  {
    label: "LABEL.JOB_TRANS",
    controller: "JobTrans",
    group: "JOB_TRANS",
    type: Type.MASTER,
    path: [
      {
        feature: "JobTransListPage",
        path: "/setup/hrm/jobtrans",
      },
      {
        feature: "JobTransItemPage",
        path: "/setup/hrm/jobtrans/:id",
      },
    ],
  },

  {
    label: "LABEL.JOB_TRANS",
    controller: "JobTrans",
    group: "JOB_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "JobTransListPage",
        path: "/hrm/employee/employeetable/:id/info/jobtrans",
      },
      {
        feature: "JobTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/jobtrans/:id",
      },
    ],
  },

  {
    label: "LABEL.JOB_TRANS",
    controller: "JobTrans",
    group: "JOB_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "TimeTicketJobTransListPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id/info/jobtrans",
      },
      {
        feature: "TimeTicketJobTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id/info/jobtrans/:id",
      },
    ],
  },

  {
    label: "LABEL.JOB_TRANS",
    controller: "JobTrans",
    group: "JOB_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "TimeTicketJobTransListPage",
        path: "/hrm/employee/timeticket/:id/info/jobtrans",
      },
      {
        feature: "TimeTicketJobTransItemPage",
        path: "/hrm/employee/timeticket/:id/info/jobtrans/:id",
      },
    ],
  },
  {
    label: "LABEL.DASHBORAD",
    controller: "MainMenu",
    group: "DashboradMenu",
    type: Type.MASTER,
    path: [
      {
        feature: "DashboradListPage",
        path: "/home",
      },
      {
        feature: "DashboradItemPage",
        path: "/home",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_TRANSFER_HR",
    controller: "TransferTrans",
    group: "REQUEST_TRANSFER_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "TransferTransListPage",
        path: "/hrm/employee/transfer-hr",
      },
      {
        feature: "TransferTransItemPage",
        path: "/hrm/employee/transfer-hr/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_TRANSFER_LEAD",
    controller: "TransferTrans",
    group: "REQUEST_TRANSFER_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "TransferTransListPage",
        path: "/hrm/employee/transfer-lead",
      },
      {
        feature: "TransferTransItemPage",
        path: "/hrm/employee/transfer-lead/:id",
      },
    ],
  },

  {
    label: "LABEL.JOB",
    controller: "Job",
    group: "JOB",
    type: Type.MASTER,
    path: [
      {
        feature: "JobListPage",
        path: "/inventory/job",
      },
      {
        feature: "JobItemPage",
        path: "/inventory/job/:id",
      },
    ],
  },

  {
    label: "LABEL.POST_ADJUST_TRANSFER",
    controller: "TransferTrans",
    group: "TRANSFERTRANS_TABLE_ACTION_POST_ADJUST_TRANSFER",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustTransferItemPage",
        path: "/hrm/employee/transfer-lead/:id/action/postadjusttransfer",
      },
    ],
  },

  {
    label: "LABEL.CANCEL_ADJUST_TRANSFER",
    controller: "TransferTrans",
    group: "TRANSFERTRANS_TABLE_ACTION_CANCEL_ADJUST_TRANSFER",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustTransferItemPage",
        path: "/hrm/employee/transfer-lead/:id/action/canceladjusttransfer",
      },
    ],
  },
  {
    label: "LABEL.COMPLETE_ADJUST_TRANSFER",
    controller: "TransferTrans",
    group: "TRANSFERTRANS_TABLE_ACTION_COMPLETE_ADJUST_TRANSFER",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustTransferItemPage",
        path: "/hrm/employee/transfer-hr/:id/action/completeadjusttransfer",
      },
    ],
  },
  {
    label: "LABEL.LEAVE_TRANS_TYPE",
    controller: "LeaveTransType",
    group: "LEAVE_TRANS_TYPE",
    type: Type.MASTER,
    path: [
      {
        feature: "LeaveTransTypeListPage",
        path: "/setup/hrm/leavetranstype",
      },
      {
        feature: "LeaveTransTypeItemPage",
        path: "/setup/hrm/leavetranstype/:id",
      },
    ],
  },
  {
    label: "LABEL.PRINT_DOCUMENT",
    controller: "Employee",
    group: "EMPLOYEE_TABLE_PRINT_DOCUMENT",
    type: Type.ACTION,
    path: [
      {
        feature: "AdjustPrintDocumentItemPage",
        path: "/hrm/employee/employeetable/:id/action/printdocument",
      },
    ],
  },

  {
    label: "LABEL.INVENTORYTRANSECTION",
    controller: "Inventorytransection",
    group: "INVENTORYTRANSECTION",
    type: Type.MASTER,
    path: [
      {
        feature: "InventorytransectionListPage",
        path: "/setup/inventory/inventorytransection",
      },
      {
        feature: "InventorytransectionItemPage",
        path: "/setup/inventory/inventorytransection/:id",
      },
    ],
  },
  {
    label: "LABEL.WHAREHOUSE",
    controller: "Wharehouse",
    group: "WHAREHOUSE",
    type: Type.MASTER,
    path: [
      {
        feature: "WarehouseListPage",
        path: "/setup/inventory/warehouse",
      },
      {
        feature: "WarehouseItemPage",
        path: "/setup/inventory/warehouse/:id",
      },
    ],
  },
  {
    label: "LABEL.PART",
    controller: "Part",
    group: "PART",
    type: Type.MASTER,
    path: [
      {
        feature: "PartListPage",
        path: "/setup/inventory/part",
      },
      {
        feature: "PartItemPage",
        path: "/setup/inventory/part/:id",
      },
    ],
  },
  {
    label: "LABEL.ITEM_CATEGORY",
    controller: "ItemCategoryTabel",
    group: "ITEM_CATEGORY_TABLE",
    type: Type.MASTER,
    path: [
      {
        feature: "ItemCategoryTabelListPage",
        path: "/setup/inventory/item-category",
      },
      {
        feature: "ItemCategoryTabelItemPage",
        path: "/setup/inventory/item-category/:id",
      },
    ],
  },

  {
    label: "LABEL.STOCKCUT",
    controller: "Stockcut",
    group: "STOCKCUT",
    type: Type.MASTER,
    path: [
      {
        feature: "StockcutListPage",
        path: "/inventory/stockcut",
      },
      {
        feature: "StockcutItemPage",
        path: "/inventory/stockcut/:id",
      },
    ],
  },

  {
    label: "LABEL.STOCKIN",
    controller: "Stockin",
    group: "STOCKIN",
    type: Type.MASTER,
    path: [
      {
        feature: "StockinListPage",
        path: "/inventory/stockin",
      },
      {
        feature: "StockinItemPage",
        path: "/inventory/stockin/:id",
      },
    ],
  },

  {
    label: "LABEL.STOCKOUT",
    controller: "Stockout",
    group: "STOCKOUT",
    type: Type.MASTER,
    path: [
      {
        feature: "StockoutListPage",
        path: "/inventory/stockout",
      },
      {
        feature: "StockoutItemPage",
        path: "/inventory/stockout/:id",
      },
    ],
  },

  {
    label: "LABEL.STOCKRETURN",
    controller: "Stockreturn",
    group: "STOCKRETURN",
    type: Type.MASTER,
    path: [
      {
        feature: "StockreturnListPage",
        path: "/inventory/stockreturn",
      },
      {
        feature: "StockreturnItemPage",
        path: "/inventory/stockreturn/:id",
      },
    ],
  },

  {
    label: "LABEL.UNIT",
    controller: "UNIT",
    group: "UNIT",
    type: Type.MASTER,
    path: [
      {
        feature: "UnitListPage",
        path: "/setup/inventory/unit",
      },
      {
        feature: "UnitItemPage",
        path: "/setup/inventory/unit/:id",
      },
    ],
  },

  {
    label: "LABEL.REVISION_TIME",
    controller: "Timeticket",
    group: "Timeticket_TABLE_ACTION_REVISION_TIME",
    type: Type.ACTION,
    path: [
      {
        feature: "RequestRevitionTimeItemPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id/action/revisiontime",
      },
    ],
  },

  {
    label: "LABEL.REVISION_TIME_TRANS",
    controller: "RevisionTimeTrans",
    group: "Timeticket_TABLE_INFO_REVISION_TIME_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "RevisionTimeTransListPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id/info/revisiontimetrans",
      },
      {
        feature: "RevisionTimeTransItemPage",
        path: "/hrm/employee/employeetable/:id/info/timeticket/:id/info/revisiontimetrans/:id",
      },
    ],
  },

  {
    label: "LABEL.REQUEST_REVISION_TIME_LEAD",
    controller: "RevisionTimeTrans",
    group: "REVISION_TIME_TRANS_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "RevisionTimeTransListPage",
        path: "/hrm/employee/requestrevisiontime-lead",
      },
      {
        feature: "RevisionTimeTransItemPage",
        path: "/hrm/employee/requestrevisiontime-lead/:id",
      },
    ],
  },

  {
    label: "LABEL.REQUEST_REVISION_TIME_HR",
    controller: "RevisionTimeTrans",
    group: "REVISION_TIME_TRANS_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "RevisionTimeTransListPage",
        path: "/hrm/employee/requestrevisiontime-hr",
      },
      {
        feature: "RevisionTimeTransItemPage",
        path: "/hrm/employee/requestrevisiontime-hr/:id",
      },
    ],
  },

  {
    label: "LABEL.POST_REVISION_TIME",
    controller: "RevisionTimeTrans",
    group: "REQUEST_REVISION_TIME_ACTION_POST_REQUEST_REVISION_TIME",
    type: Type.ACTION,
    path: [
      {
        feature: "RevisionTimeTransItemPage",
        path: "/hrm/employee/requestrevisiontime-lead/:id/action/postrevisiontime",
      },
    ],
  },
  {
    label: "LABEL.ITEM",
    controller: "Item",
    group: "ITEM",
    type: Type.MASTER,
    path: [
      {
        feature: "ItemListPage",
        path: "/setup/inventory/item",
      },
      {
        feature: "ItemItemPage",
        path: "/setup/inventory/item/:id",
      },
    ],
  },
  {
    label: "LABEL.WHAREHOUSE",
    controller: "Wharehouse",
    group: "WHAREHOUSE",
    type: Type.MASTER,
    path: [
      {
        feature: "WharehouseListPage",
        path: "/setup/inventory/warehouse",
      },
      {
        feature: "WharehouseItemPage",
        path: "/setup/inventory/warehouse/:id",
      },
    ],
  },
  {
    label: "LABEL.INVENTORY_TYPE",
    controller: "InventoryType",
    group: "INVENTORY_TYPE",
    type: Type.MASTER,
    path: [
      {
        feature: "InventoryTypeListPage",
        path: "/setup/inventory/inventorytype",
      },
      {
        feature: "InventoryTypeItemPage",
        path: "/setup/inventory/inventorytype/:id",
      },
    ],
  },
  {
    label: "LABEL.SPARE_PARTS",
    controller: "SpareParts",
    group: "SPARE_PARTS",
    type: Type.MASTER,
    path: [
      {
        feature: "SparePartsListPage",
        path: "/setup/inventory/sparepart",
      },
      {
        feature: "SparePartsItemPage",
        path: "/setup/inventory/sparepart/:id",
      },
    ],
  },
  {
    label: "LABEL.ACCESS",
    controller: "Access",
    group: "ACCESS",
    type: Type.INFO,
    path: [
      {
        feature: "AccessListPage",
        path: "/administrator/role/:id/info/accessfeature",
      },
      {
        feature: "AccessItemPage",
        path: "/administrator/role/:id/info/accessfeature/:id",
      },
    ],
  },
  {
    label: "LABEL.SUBSCRIBE_TRANS",
    controller: "SubscribeTrans",
    group: "SUBSCRIBE_TRANS",
    type: Type.INFO,
    path: [
      {
        feature: "SubscribeTransListPage",
        path: "/administrator/subscribe/:id/info/subscribetrans",
      },
      {
        feature: "SubscribeTransItemPage",
        path: "/administrator/subscribe/:id/info/subscribetrans/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_OVERTIME_HR",
    controller: "Overtime",
    group: "REQUEST_OVERTIME_HR",
    type: Type.MASTER,
    path: [
      {
        feature: "OvertimeListPage",
        path: "/hrm/employee/overtime-hr",
      },
      {
        feature: "OvertimeItemPage",
        path: "/hrm/employee/overtime-hr/:id",
      },
    ],
  },
  {
    label: "LABEL.REQUEST_OVERTIME_LEAD",
    controller: "Overtime",
    group: "REQUEST_OVERTIME_LEAD",
    type: Type.MASTER,
    path: [
      {
        feature: "OvertimeListPage",
        path: "/hrm/employee/overtime-lead",
      },
      {
        feature: "OvertimeItemPage",
        path: "/hrm/employee/overtime-lead/:id",
      },
    ],
  },
  {
    label: "LABEL.WELFARE_DETAIL",
    controller: "WelfareDetail",
    group: "WELFARE_INFO_WELFARE_DETAIL",
    type: Type.INFO,
    path: [
      {
        feature: "WelfareDetailListPage",
        path: "/hrm/employee/welfare/:id/info/welfaredetail",
      },
      {
        feature: "WelfareDetailItemPage",
        path: "/hrm/employee/welfare/:id/info/welfaredetail/:id",
      },
    ],
  },
  {
    label: "LABEL.BUDGETING",
    controller: "Budgeting",
    group: "BUDGETING_CODE",
    type: Type.MASTER,
    path: [
      {
        feature: "BudgetingCodeListPage",
        path: "/setup/budgeting/budgetingcode",
      },
      {
        feature: "BudgetingCodeItemPage",
        path: "/setup/budgeting/budgetingcode/:id",
      },
    ],
  },
  {
    label: "LABEL.BUDGETING_GROUP",
    controller: "Budgeting",
    group: "BUDGETING_GROUP",
    type: Type.MASTER,
    path: [
      {
        feature: "BudgetingGroupListPage",
        path: "/setup/budgeting/budgetinggroup",
      },
      {
        feature: "BudgetingGroupItemPage",
        path: "/setup/budgeting/budgetinggroup/:id",
      },
    ],
  },
  {
    label: "LABEL.BANK",
    controller: "Bank",
    group: "BANK",
    type: Type.MASTER,
    path: [
      {
        feature: "BankListPage",
        path: "/setup/bank/banktable",
      },
      {
        feature: "BankItemPage",
        path: "/setup/bank/banktable/:id",
      },
    ],
  },
  {
    label: "LABEL.BANK_GROUP",
    controller: "Bank",
    group: "BANK_GROUP",
    type: Type.MASTER,
    path: [
      {
        feature: "BankGroupListPage",
        path: "/setup/bank/bankgroup",
      },
      {
        feature: "BankGroupItemPage",
        path: "/setup/bank/bankgroup/:id",
      },
    ],
  },
  {
    label: "LABEL.CUSTOMER",
    controller: "Customer",
    group: "CUSTOMER",
    type: Type.MASTER,
    path: [
      {
        feature: "CustomerListPage",
        path: "/setup/customer/customers",
      },
      {
        feature: "CustomerItemPage",
        path: "/setup/customer/customers/:id",
      },
    ],
  },
  {
    label: "LABEL.CUSTOMER_CATEGORY",
    controller: "Customer",
    group: "CUSTOMER_CATEGORY",
    type: Type.MASTER,
    path: [
      {
        feature: "CustomerCategoryListPage",
        path: "/setup/customer/customercategory",
      },
      {
        feature: "CustomerCategoryItemPage",
        path: "/setup/customer/customercategory/:id",
      },
    ],
  },
  {
    label: "LABEL.CONTACT_TYPE",
    controller: "Customer",
    group: "CONTACT_TYPE",
    type: Type.MASTER,
    path: [
      {
        feature: "ContactTypeListPage",
        path: "/setup/customer/contacttype",
      },
      {
        feature: "ContactTypeItemPage",
        path: "/setup/customer/contacttype/:id",
      },
    ],
  },
  {
    label: "LABEL.CUSTOMER_GROUP",
    controller: "Customer",
    group: "CUSTOMER_GROUP",
    type: Type.MASTER,
    path: [
      {
        feature: "CustomerGroupListPage",
        path: "/setup/customer/customergroup",
      },
      {
        feature: "CustomerGroupItemPage",
        path: "/setup/customer/customergroup/:id",
      },
    ],
  },
  {
    label: "LABEL.SUPPLIER",
    controller: "Supplier",
    group: "SUPPLIER",
    type: Type.MASTER,
    path: [
      {
        feature: "SupplierListPage",
        path: "/setup/supplier/supplier",
      },
      {
        feature: "SupplierItemPage",
        path: "/setup/supplier/supplier/:id",
      },
    ],
  },
  {
    label: "LABEL.SUPPLIER_CATEGORY",
    controller: "Supplier",
    group: "SUPPLIER_CATEGORY",
    type: Type.MASTER,
    path: [
      {
        feature: "SupplierCatgoryListPage",
        path: "/setup/supplier/suppliercatgory",
      },
      {
        feature: "SupplierCatgoryItemPage",
        path: "/setup/supplier/suppliercatgory/:id",
      },
    ],
  },
  {
    label: "LABEL.CANCEL_REVISION_TIME",
    controller: "RevisionTimeTrans",
    group: "REQUEST_REVISION_TIME_ACTION_CANCEL_REQUEST_REVISION_TIME",
    type: Type.ACTION,
    path: [
      {
        feature: "RevisionTimeTransItemPage",
        path: "/hrm/employee/requestrevisiontime-lead/:id/action/cancelrevisiontime",
      },
    ],
  },
  {
    label: "LABEL.SUPPLIER_BRANCH",
    controller: "Supplier",
    group: "SUPPLIER_BRANCH",
    type: Type.MASTER,
    path: [
      {
        feature: "SupplierBranchListPage",
        path: "/setup/supplier/supplierbranch",
      },
      {
        feature: "SupplierBranchItemPage",
        path: "/setup/supplier/supplierbranch/:id",
      },
    ],
  },
  {
    label: "LABEL.COMPLETE_REVISION_TIME",
    controller: "RevisionTimeTrans",
    group: "REQUEST_REVISION_TIME_ACTION_COMPLETE_REQUEST_REVISION_TIME",
    type: Type.ACTION,
    path: [
      {
        feature: "RevisionTimeTransItemPage",
        path: "/hrm/employee/requestrevisiontime-hr/:id/action/completerevisiontime",
      },
    ],
  },
  {
    label: "LABEL.ASSET",
    controller: "Asset",
    group: "ASSET",
    type: Type.MASTER,
    path: [
      {
        feature: "AssetListPage",
        path: "/setup/asset/asset",
      },
      {
        feature: "AssetItemPage",
        path: "/setup/asset/asset/:id",
      },
    ],
  },
  {
    label: "LABEL.ASSET_CATEGORY",
    controller: "Asset",
    group: "ASSET_CATEGORY",
    type: Type.MASTER,
    path: [
      {
        feature: "AssetCategoryListPage",
        path: "/setup/asset/assetcategory",
      },
      {
        feature: "AssetCategorytemPage",
        path: "/setup/asset/assetcategory/:id",
      },
    ],
  },
  {
    label: "LABEL.VEHICLE",
    controller: "Asset",
    group: "VEHICLE",
    type: Type.MASTER,
    path: [
      {
        feature: "VahicleListPage",
        path: "/setup/asset/vehicle",
      },
      {
        feature: "VahicletemPage",
        path: "/setup/asset/vehicle/:id",
      },
    ],
  },
  {
    label: "LABEL.VEHICLE",
    controller: "Asset",
    group: "VEHICLE",
    type: Type.MASTER,
    path: [
      {
        feature: "VahicleListPage",
        path: "/setup/asset/vehicle",
      },
      {
        feature: "VahicletemPage",
        path: "/setup/asset/vehicle/:id",
      },
    ],
  },
  {
    label: "LABEL.MECHICLE",
    controller: "Asset",
    group: "MECHICLE",
    type: Type.MASTER,
    path: [
      {
        feature: "MechicleListPage",
        path: "/setup/asset/mechicle",
      },
      {
        feature: "MechicleItemPage",
        path: "/setup/asset/mechicle/:id",
      },
    ],
  },
  {
    label: "LABEL.PRODUCT",
    controller: "Product",
    group: "PRODUCT",
    type: Type.MASTER,
    path: [
      {
        feature: "ProductTableListPage",
        path: "/setup/product/producttable",
      },
      {
        feature: "ProductTableItemPage",
        path: "/setup/product/producttable/:id",
      },
    ],
  },
  {
    label: "LABEL.PRODUCT_GROUP",
    controller: "Product",
    group: "PRODUCT_GROUP",
    type: Type.MASTER,
    path: [
      {
        feature: "ProductTableListPage",
        path: "/setup/product/productgroup",
      },
      {
        feature: "ProductTableItemPage",
        path: "/setup/product/productgroup/:id",
      },
    ],
  },
  {
    label: "LABEL.BRAND",
    controller: "Product",
    group: "BRAND",
    type: Type.MASTER,
    path: [
      {
        feature: "BrandListPage",
        path: "/setup/product/brand",
      },
      {
        feature: "BrandleItemPage",
        path: "/setup/product/brand/:id",
      },
    ],
  },
  {
    label: "LABEL.BOM",
    controller: "MRP",
    group: "BOM",
    type: Type.MASTER,
    path: [
      {
        feature: "BomListPage",
        path: "/setup/mrp/bom",
      },
      {
        feature: "BomleItemPage",
        path: "/setup/mrp/bom/:id",
      },
    ],
  },
  {
    label: "LABEL.RM",
    controller: "Mantenance",
    group: "RM",
    type: Type.MASTER,
    path: [
      {
        feature: "RMListPage",
        path: "/setup/mantenance/rm",
      },
      {
        feature: "RMItemPage",
        path: "/setup/mantenance/rm/:id",
      },
    ],
  },
  {
    label: "LABEL.ROUTE",
    controller: "Logistics",
    group: "ROUTE",
    type: Type.MASTER,
    path: [
      {
        feature: "RouteListPage",
        path: "/setup/logistics/route",
      },
      {
        feature: "RouteItemPage",
        path: "/setup/logistics/route/:id",
      },
    ],
  },
  {
    label: "LABEL.LOCATION",
    controller: "Logistics",
    group: "LOCATION",
    type: Type.MASTER,
    path: [
      {
        feature: "LocationListPage",
        path: "/setup/logistics/location",
      },
      {
        feature: "LocationItemPage",
        path: "/setup/logistics/location/:id",
      },
    ],
  },
  {
    label: "LABEL.PURCHASING_METHOD",
    controller: "Purchase",
    group: "PURCHASING_METHOD",
    type: Type.MASTER,
    path: [
      {
        feature: "PurchaseListPage",
        path: "/setup/purchase/purchasingmethod",
      },
      {
        feature: "PurchaseItemPage",
        path: "/setup/purchase/purchasingmethod/:id",
      },
    ],
  },
  {
    label: "LABEL.RECIEVE",
    controller: "Recieve",
    group: "RECIEVE_METHOD",
    type: Type.MASTER,
    path: [
      {
        feature: "RecieveListPage",
        path: "/setup/recieve/recievemethod",
      },
      {
        feature: "RecieveItemPage",
        path: "/setup/recieve/recievemethod/:id",
      },
    ],
  },
  {
    label: "LABEL.DOCUMENT_NUMBER",
    controller: "Document",
    group: "DOCUMENT_NUMBER",
    type: Type.MASTER,
    path: [
      {
        feature: "DocumentNumberListPage",
        path: "/setup/document/documentnumber",
      },
      {
        feature: "DocumentNumberItemPage",
        path: "/setup/document/documentnumber/:id",
      },
    ],
  },
  {
    label: "LABEL.DOCUMENT_TEMPLATE",
    controller: "Document",
    group: "DOCUMENT_TEMPLATE",
    type: Type.MASTER,
    path: [
      {
        feature: "DocumentTemplateListPage",
        path: "/setup/document/documenttemplate",
      },
      {
        feature: "DocumentTemplateItemPage",
        path: "/setup/document/documenttemplate/:id",
      },
    ],
  },
  {
    label: "LABEL.DOCUMENT_TYPE",
    controller: "Document",
    group: "DOCUMENT_TYPE",
    type: Type.MASTER,
    path: [
      {
        feature: "DocumentTypeListPage",
        path: "/setup/document/documenttype",
      },
      {
        feature: "DocumentTypeItemPage",
        path: "/setup/document/documenttype/:id",
      },
    ],
  },
  {
    label: "LABEL.DOCUMENT_STATUS",
    controller: "Document",
    group: "DOCUMENT_STATUS",
    type: Type.MASTER,
    path: [
      {
        feature: "DocumentStatusListPage",
        path: "/setup/document/documentstatus",
      },
      {
        feature: "DocumentStatusItemPage",
        path: "/setup/document/documentstatus/:id",
      },
    ],
  },
  {
    label: "LABEL.ATTACHMENT",
    controller: "Document",
    group: "ATTACHMENT",
    type: Type.MASTER,
    path: [
      {
        feature: "AttachmentListPage",
        path: "/setup/document/attachment",
      },
      {
        feature: "AttachmentItemPage",
        path: "/setup/document/attachment/:id",
      },
    ],
  },
  {
    label: "LABEL.TRANSACTION",
    controller: "Transaction",
    group: "TRAINING_TRANS",
    type: Type.MASTER,
    path: [
      {
        feature: "TrainigTransListPage",
        path: "/setup/transaction/trainigtrans",
      },
      {
        feature: "TrainigTransItemPage",
        path: "/setup/transaction/trainigtrans/:id",
      },
    ],
  },
  {
    label: "LABEL.TRAINING_TRANS_DETAIL",
    controller: "Transaction",
    group: "TRAINING_TRANS_DETAIL",
    type: Type.MASTER,
    path: [
      {
        feature: "TrainingTransDetailListPage",
        path: "/setup/transaction/trainigtransdetail",
      },
      {
        feature: "TrainingTransDetailItemPage",
        path: "/setup/transaction/trainigtransdetail/:id",
      },
    ],
  },
  {
    label: "LABEL.TRAINING_TRANS_DETAIL",
    controller: "Transaction",
    group: "TRAINING_TRANS_DETAIL",
    type: Type.MASTER,
    path: [
      {
        feature: "TrainingTransDetailListPage",
        path: "/setup/transaction/trainigtransdetail",
      },
      {
        feature: "TrainingTransDetailItemPage",
        path: "/setup/transaction/trainigtransdetail/:id",
      },
    ],
  },
  {
    label: "LABEL.LEAVE_TRANS",
    controller: "Transaction",
    group: "LEAVE_TRANS",
    type: Type.MASTER,
    path: [
      {
        feature: "LeaveTransListPage",
        path: "/setup/transaction/leavetrans",
      },
      {
        feature: "LeaveTransItemPage",
        path: "/setup/transaction/leavetrans/:id",
      },
    ],
  },
  {
    label: "LABEL.CONTACT_PERSON",
    controller: "Transaction",
    group: "CONTACT_PERSON",
    type: Type.MASTER,
    path: [
      {
        feature: "ContactPersonListPage",
        path: "/setup/transaction/contactperson",
      },
      {
        feature: "ContactPersonItemPage",
        path: "/setup/transaction/contactperson/:id",
      },
    ],
  },
  {
    label: "LABEL.POSITION_TRANS",
    controller: "Transaction",
    group: "POSITION_TRANS",
    type: Type.MASTER,
    path: [
      {
        feature: "PositionTransListPage",
        path: "/setup/transaction/position",
      },
      {
        feature: "PositionTransItemPage",
        path: "/setup/transaction/position/:id",
      },
    ],
  },
  {
    label: "LABEL.WARNING_TRANS",
    controller: "Transaction",
    group: "WARNING_TRANS",
    type: Type.MASTER,
    path: [
      {
        feature: "WarningTransListPage",
        path: "/setup/transaction/warningtrans",
      },
      {
        feature: "WarningTransListPage",
        path: "/setup/transaction/warningtrans/:id",
      },
    ],
  },
  {
    label: "LABEL.CONTACT",
    controller: "Contact",
    group: "CONTACT",
    type: Type.MASTER,
    path: [
      {
        feature: "ContactListPage",
        path: "/setup/contact/contacttable",
      },
      {
        feature: "ContactItemPage",
        path: "/setup/contact/contacttable/:id",
      },
    ],
  },

  {
    label: "LABEL.WORK_EXPERIENCE",
    controller: "Work_experience",
    group: "HRM_EMPLOYEE_EMPLOYEE_INFO_WORK_EXPERIENCE",
    type: Type.INFO,
    path: [
      {
        feature: "WorkExperiencenListPage",
        path: "/hrm/employee/employeetable/:id/info/workexperience",
      },
      {
        feature: "WorkExperiencenItemPage",
        path: "/hrm/employee/employeetable/:id/info/workexperience/:id",
      },
    ],
  },
  {
    label: "LABEL.BOOK_BANK",
    controller: "Bookbank",
    group: "ACCOUNT_BOOK_BANK",
    type: Type.MASTER,
    path: [
      {
        feature: "BookBankListPage",
        path: "/account/book_bank",
      },
      {
        feature: "BookBankItemPage",
        path: "/account/book_bank/:id",
      },
    ],
  },

  {
    label: "LABEL.BANK",
    controller: "Bank",
    group: "SETUP_BANK",
    type: Type.MASTER,
    path: [
      {
        feature: "BankListPage",
        path: "/setup/bank/bank",
      },
      {
        feature: "BankItemPage",
        path: "/setup/bank/bank/:id",
      },
    ],
  },

  {
    label: "LABEL.LEGAL_PUNISHMENT",
    controller: "LEGAL_PUNISHMENT",
    group: "SETUP_HRM_LEGALPUNISHMENT",
    type: Type.MASTER,
    path: [
      {
        feature: "LegalPunishmentListPage",
        path: "setup/hrm/legalpunishment",
      },
      {
        feature: "LegalPunishmentItemPage",
        path: "/setup/hrm/legalpunishment/:id",
      },
    ],
  },

  {
    label: "LABEL.WELFARE",
    controller: "Welfare",
    group: "SETUP_HRM_WELFARE",
    type: Type.MASTER,
    path: [
      {
        feature: "WelfareListPage",
        path: "/setup/hrm/welfare",
      },
      {
        feature: "WelfareItemPage",
        path: "/setup/hrm/welfare/:id",
      },
    ],
  },

  {
    label: "LABEL.WELFARE_DETAIL",
    controller: "WelfareDetail",
    group: "SETUP_HRM_WELFARE_INFO_WELFARE_DETAIL",
    type: Type.INFO,
    path: [
      {
        feature: "WelfareDetailListPage",
        path: "/setup/hrm/welfare/:id/info/welfaredetail",
      },
      {
        feature: "WelfareDetailItemPage",
        path: "/setup/hrm/welfare/:id/info/welfaredetail/:id",
      },
    ],
  },
  {
    label: "LABEL.BOOK_BANK",
    controller: "EMPLOYEE",
    group: "HRM_EMPLOYEE_EMPLOYEE_INFO_BOOK_BANK",
    type: Type.INFO,
    path: [
      {
        feature: "BookBankListPage",
        path: "/hrm/employee/employeetable/:id/info/Bookbank",
      },
      {
        feature: "BookBankItemPage",
        path: "/hrm/employee/employeetable/:id/info/Bookbank/:id",
      },
    ],
  },
  {
    label: "LABEL.CAR",
    controller: "Car",
    group: "CAR",
    type: Type.MASTER,
    path: [
      {
        feature: "CarListPage",
        path: "/logistic/car",
      },
      {
        feature: "CarItemPage",
        path: "/logistic/car/:id",
      },
    ],
  },
];
