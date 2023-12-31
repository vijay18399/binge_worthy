import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { Content } from '../interface/content';
import { Observable, map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dbPath = '/content';

  contentRef: AngularFirestoreCollection<Content>;

  constructor(private db: AngularFirestore) {
    this.contentRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Content> {
    return this.contentRef;
  }
  getById(id: string): Observable<DocumentSnapshot<Content>> {
    console.log('Content ID:', id);
    return this.contentRef.doc(id).get() as Observable<DocumentSnapshot<Content>>;
  }
  create(content: Content): any {
    return this.contentRef.add({ ...content });
  }

  update(id: string, data: any): Promise<void> {
    return this.contentRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.contentRef.doc(id).delete();
  }
  searchByTitle(titleQuery: string): Observable<Content[]> {
    return this.db.collection<Content>(this.dbPath, ref => {
      return ref.where('title', '>=', titleQuery)
                .where('title', '<=', titleQuery + '\uf8ff')
                .orderBy('title');
    }).snapshotChanges().pipe(
      map((actions:any) => actions.map((a:any) => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as Content;
        return { id, ...data };
      }))
    );
  }
  getRandomDocument(): Observable<Content | null> {
    // Step 1: Count documents (assumes you have a separate document to store the count)
    return this.db.doc<{ count: number }>('/metadata/contentCount').valueChanges().pipe(
      switchMap(metadata => {
        const totalCount = metadata?.count || 0;

        // Step 2: Generate random index
        const randomIndex = Math.floor(Math.random() * totalCount);

        // Step 3: Query based on random index
        return this.db.collection<Content>(this.dbPath, ref => {
          return ref.limit(1).startAt(randomIndex);
        }).valueChanges();
      }),
      map(contents => contents.length > 0 ? contents[0] : null)
    );
  }
}
