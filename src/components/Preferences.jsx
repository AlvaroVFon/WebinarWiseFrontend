function Preferences({ preferences }) {
  return (
    <div className=''>
      <p>Preferences</p>
      {preferences &&
        preferences?.map((preference) => (
          <div key={preference.id}>
            <input
              type='checkbox'
              value={preference.id}
              name={preference.id}
            />
            <label htmlFor={preference.id}>{preference.name}</label>
          </div>
        ))}
    </div>
  )
}
export default Preferences
