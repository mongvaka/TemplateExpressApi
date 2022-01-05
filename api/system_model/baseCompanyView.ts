export class BaseCompanyView {
  public create_by: string;
  public create_date: string;
  public update_by: string;
  public update_date: string;
  public is_active: boolean = true;
  public branch_uuid: string;
  public company_uuid: string;
  public ref_uuid: string;
  public ref_type: number;
}
