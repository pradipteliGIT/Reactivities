import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../app/api/agent";
import Activity from "../../app/models/activity";

export default class ActivityStore {
  activityRegistry=new Map<string,Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode: boolean = false;
  loading: boolean = false;
  loadingInitial: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  get activityByDate(){   
   return Array.from(this.activityRegistry.values()).sort((a,b)=>Date.parse(a.date)-Date.parse(b.date)); 
  };
 
get groupedActivities(){
  return Object.entries(
    this.activityByDate.reduce((activities,activity)=>{
       const date=activity.date;
       activities[date]=activities[date]?[...activities[date], activity]:[activity];
       return activities;
    },{} as {[key:string]: Activity[]})

  )
}

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  loadActivities = async () => {    
    try {
      const activities = await agent.Activities.list();
      runInAction(()=>{
        activities.forEach((activity) => {
         this.setActivity(activity);
        });
        this.setLoadingInitial(false);
      });
      
    } catch (error) {
      console.log(error);
      runInAction(()=>{
        this.setLoadingInitial(false);
      });     
    }
  };

  loadActivity=async(id:string)=>{
    let activity= this.getActivity(id);
      if(activity){
        this.selectedActivity=activity;
        return activity;
      }else{
        this.setLoadingInitial(true);
        try{
         const activity = await agent.Activities.details(id);
          this.setActivity(activity);
          runInAction(()=>{
            this.selectedActivity=activity;
          });         
          this.setLoadingInitial(false);
          return activity;
        }catch(error){
          console.log(error);
          this.setLoadingInitial(false);
        }
       
      }
  };

  private getActivity=(id:string)=>{
    return this.activityRegistry.get(id);
  }

  setActivity = (activity: Activity) => {
    activity.date = activity?.date?.split("T")[0] || "";
     this.activityRegistry.set(activity.id,activity);
  };  

  createActivity = async (activity: Activity) => {
    this.loading = true;    
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id,activity);
        this.selectedActivity = activity;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateActivity = async (activity: Activity) => {
    this.loading = true;   
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id,activity);
        this.selectedActivity = activity;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteActivity=async (id:string)=>{
    this.loading=true;
    try{
        await agent.Activities.delete(id);
        runInAction(()=>{
            this.activityRegistry.delete(id);
            this.loading=false;
        })

    }catch(error){
        console.log(error);
        runInAction(() => {
            this.loading = false;
          });
    }
  }
}
