interface MovieRepo extends Repo<Movie> {
  findByName(name: string): Promise<Movie | null>
}