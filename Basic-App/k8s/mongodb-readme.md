Explanation:


1. PersistentVolume (PV):

- Defines a 1Gi storage volume on the host machine at /data/mongo.


2. PersistentVolumeClaim (PVC):

- Claims the defined PersistentVolume to use for MongoDB storage.


3. StatefulSet:

- Ensures a stable network identity and storage for each pod.
- Uses volumeClaimTemplates for dynamic volume provisioning, creating a unique PVC for each pod instance.


4. Service:

- Exposes the StatefulSet for communication with other services or applications.


This setup ensures MongoDB's data persists even if the pod is deleted or recreated. Let me know if you need further adjustments!